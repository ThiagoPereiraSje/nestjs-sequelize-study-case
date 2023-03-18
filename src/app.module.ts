import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: process.env.DIALECT as any,
      host: process.env.HOST,
      port: parseInt(process.env.PORT),
      database: process.env.DATABASE,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      models: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
