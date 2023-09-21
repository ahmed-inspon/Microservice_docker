import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(private readonly userService:UserService){}

    @Get('/')
    async getAll(){
        return this.userService.getAll();
    }

    @Get('/add_data')
    async addData(){
        return this.userService.addData();
    }
}
