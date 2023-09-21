import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userModel } from './user.schema';

@Module({
  imports:[userModel],
  controllers: [UserController],
  providers: [UserService],
  exports: [ UserService],
})
export class UserModule {}
