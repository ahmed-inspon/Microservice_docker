import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument,Types } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
 
  @Prop({required:false})
  firstName?: string;

  @Prop({required:false})
  lastName?: string;

  @Prop({required:true,unique:true})
  email?: string;

  @Prop({required:false,default:Date.now})
  createdAt?: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);

export const userModel = MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]);
