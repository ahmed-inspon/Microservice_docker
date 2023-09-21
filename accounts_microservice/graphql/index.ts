import { readFileSync } from "fs"
import {GraphQLResolveInfo} from "graphql";
import {AccountResolver} from './resolvers/account.resolvers';
import path from "path"

export const typeDefs = readFileSync(path.join(process.cwd(),"./graphql/typeDefs/account.graphql"),{encoding:'utf-8'})

export const resolvers = {
    Query:{
        ...AccountResolver.Query
    }
}