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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountResolver = void 0;
const account_service_1 = require("../services/account.service");
exports.AccountResolver = {
    Query: {
        accounts(_, args, context, info) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield (0, account_service_1.getAccounts)();
            });
        },
        account(_, args, context, info) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield (0, account_service_1.getAccount)({ id: args.id });
            });
        },
    }
};
