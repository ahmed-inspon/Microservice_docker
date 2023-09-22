import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
let mongo_url = "mongodb://mongodb/user_microservice"

import { GraphQLModule, Resolver } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { RootResolver } from './Resolver';

if(process.env.DB_USER  && process.env.DB_PASS )
{
  mongo_url = `${process.env.DB_SCHEME}://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASS)}@${process.env.DB_HOST}/${process.env.DB_NAME}${process.env.DB_ARGS}`
}
console.log("mongo_url",mongo_url);
@Module({
  imports: [UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      include:[UserModule],
      driver: ApolloDriver,
      playground: false,
      typePaths: ["./**/*.graphql"]
    }),
    MongooseModule.forRoot(mongo_url),
],
  controllers: [AppController],
  providers: [AppService,RootResolver],
})
export class AppModule {}
