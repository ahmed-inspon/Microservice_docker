"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const fs_1 = require("fs");
const account_resolvers_1 = require("./resolvers/account.resolvers");
const path_1 = __importDefault(require("path"));
exports.typeDefs = (0, fs_1.readFileSync)(path_1.default.join(process.cwd(), "./graphql/typeDefs/account.graphql"), { encoding: 'utf-8' });
exports.resolvers = {
    Query: Object.assign({}, account_resolvers_1.AccountResolver.Query)
};
