import { Resolver,Query } from "@nestjs/graphql";
import { User, UserDocument } from "./user.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
type Document = UserDocument;

@Resolver("User")
export class UserResolver{
    constructor(@InjectModel(User.name) private userModel: Model<Document>){}

    @Query('users')
    async getAllUsers(){
        return await this.userModel.find({});
    }
}