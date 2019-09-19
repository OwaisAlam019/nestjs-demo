import { Controller, Get, Req, Post, Body, Header } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto'
import { ApiUseTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { Cat } from './cats.entity';
import { CatsService } from './cats.services';


@Crud({
    model: {
        type:Cat,
    }
})

// @ApiUseTags('cats')
@Controller('cats')
export class CatsController {

    constructor(public service: CatsService){
        
    }

//     @Get()
//     findAll(@Req() req: Request): string {
//         console.log(req,"reqiest")
//         return "this action from cats controller";
//     }

//     @Post()
//     // @Header('Content-Type', 'application/json')
//    async create(@Body() catObj : CreateCatDto)  {
//        console.log(catObj,"yo")
//         return {
//             name:catObj.name,
//             age:catObj.age,
//             breed:catObj.breed
//         }
//     }
}
