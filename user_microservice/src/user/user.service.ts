import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import {faker} from '@faker-js/faker';

type Document = UserDocument;
@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<Document>){}

    async getAll(){
        return await this.userModel.find({});
    }

    async addData(){
       return await this.userModel.create({firstName:faker.person.firstName(),lastName:faker.person.lastName(),email:faker.internet.email()})

    }
}
