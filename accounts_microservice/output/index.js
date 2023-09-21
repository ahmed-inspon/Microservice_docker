"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const cors_1 = __importDefault(require("cors"));
const graphql_1 = require("./graphql");
const node_redis_pubsub_1 = __importDefault(require("node-redis-pubsub"));
const port = process.env.port || 3002;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const nrp = (0, node_redis_pubsub_1.default)({
    port: 6379,
    scope: 'microservice'
});
const app = (0, express_1.default)();
const bootstrapServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = new server_1.ApolloServer({
        typeDefs: graphql_1.typeDefs,
        resolvers: graphql_1.resolvers,
    });
    yield server.start();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use('/accounts_microservice', (0, express4_1.expressMiddleware)(server));
    app.get('/accounts', (req, res) => {
        res.json({ success: false, accounts: [] });
    });
    app.listen(port, () => {
        console.log("server running at ", port);
    });
    //Redis Pubsub
    nrp.on("new_user", (data) => {
        prisma.account.create({
            data: {
                userId: data._id,
                expenses: (Math.random() * 9999)
            }
        });
        console.log("New Account Created for ", data.firstName);
    });
});
bootstrapServer();
