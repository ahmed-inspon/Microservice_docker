import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import {faker} from '@faker-js/faker';
import * as NRP from 'node-redis-pubsub'
type Document = UserDocument;
const nrp =  NRP({
    port:6379,
    scope:'microservice'
})
@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<Document>){}

    async getAll(){
        return await this.userModel.find({});
    }

    async addData(){
       const user = await this.userModel.create({firstName:faker.person.firstName(),lastName:faker.person.lastName(),email:faker.internet.email()})
       nrp.emit("new_user",user);
       return user;
    }
}
