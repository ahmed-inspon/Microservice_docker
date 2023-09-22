import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userModel } from './user.schema';
import { UserResolver } from './user.resolver';

@Module({
  imports:[userModel],
  controllers: [UserController],
  providers: [UserService,UserResolver],
  exports: [ UserService],
})
export class UserModule {}
