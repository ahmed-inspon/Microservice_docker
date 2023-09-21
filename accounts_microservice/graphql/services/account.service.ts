import { PrismaClient } from "@prisma/client";

interface GetAccountArgs{
    id:number;
}

const prisma = new PrismaClient();

export const getAccounts = async () =>{
   return await prisma.account.findMany();
}

export const getAccount = async ({id}: GetAccountArgs) => {
    return await prisma.account.findUnique({where:{id}})
}