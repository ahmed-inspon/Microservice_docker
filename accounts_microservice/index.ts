import express, {Express,Request,Response} from 'express';
import * as dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import cors from 'cors';
import { typeDefs,resolvers } from './graphql';
import NRP from 'node-redis-pubsub'
const port = process.env.port || 3002;
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const nrp = NRP({
    port:6379,
    scope:'microservice',
    host:'redis'
})
const app:Express = express();

const bootstrapServer = async() =>{
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })

    await server.start();

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use('/graphql',expressMiddleware(server))
    app.get('/accounts' , (req:Request,res:Response)=>{
        res.json({success:false ,accounts:[],version:'2'})
    })
    
    app.get('/',(req,res)=>{
        return res.send("<h1>This is an Accounts Microservice</h1>")
    })

    app.listen(port,()=>{
        console.log("server running at ",port)
    });

    //Redis Pubsub
    nrp.on("new_user",(data:any)=>{
        prisma.account.create({
            data:{
                userId:data._id,
                expenses:(Math.random()*9999)
            }
        })
        console.log("New Account Created for ",data.firstName)
    });

    


}

bootstrapServer();
