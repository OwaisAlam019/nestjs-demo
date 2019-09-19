import { Controller, Get, Req, Post, Body, Header } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto'



@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() req: Request): string {
        console.log(req,"reqiest")
        return "this action from cats controller";
    }

    @Post()
    // @Header('Content-Type', 'application/json')
   async create(@Body() catObj : CreateCatDto)  {
       console.log(catObj,"yo")
        return {
            name:catObj.name,
            age:catObj.age,
            breed:catObj.breed
        }
    } 
}

