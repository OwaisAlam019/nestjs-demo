import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Cat } from './cats.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService  {
constructor(
    @InjectRepository(Cat) 
    private readonly CatRepository: Repository<Cat>) {

    }

    async findAll(): Promise<Cat[]>{
        return await this.CatRepository.find();
    }
}
