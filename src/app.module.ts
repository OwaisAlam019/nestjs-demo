import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CatsController } from './cats/cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { join } from 'path';
// import { CatsService } from './cats/cats.services';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type":"mysql",
      "host":"localhost",
      "port":3306,
      "username":"root",
      "password":"123",
      "database":"cats",
      "entities":[join(__dirname + '/**/**.entity{.ts,.js}')],
      // "entities":[join(__dirname + '/cats/cats.entity.ts')],
      "synchronize":true
    }),
    CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection:Connection){
    if(connection)
    console.log("db connected")
    console.log(join(__dirname + '**/**.entity{.ts,.js}'))
  }
}
