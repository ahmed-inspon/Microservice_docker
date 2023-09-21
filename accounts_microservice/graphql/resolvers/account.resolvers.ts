  import {GraphQLResolveInfo} from "graphql";
import { getAccount, getAccounts } from "../services/account.service";
  export const AccountResolver = {
    Query:{
        async accounts(_:any, args: Record<string,any>,context:any,info: GraphQLResolveInfo){
            return await getAccounts()
        },
        async account(_:any, args: Record<string,any>,context:any,info: GraphQLResolveInfo){
            return await getAccount({id:args.id})

        },
    }
  }