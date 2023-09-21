import express, {Express,Request,Response} from 'express';
import * as dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import cors from 'cors';
import { typeDefs,resolvers } from './graphql';
const port = process.env.port || 3002;

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
    app.use('/accounts_microservice',expressMiddleware(server))
    app.get('/accounts' , (req:Request,res:Response)=>{
        res.json({success:false ,accounts:[]})
    })
    
    app.listen(port,()=>{
        console.log("server running at ",port)
    });
}

bootstrapServer();
