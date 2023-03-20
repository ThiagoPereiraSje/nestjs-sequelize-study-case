import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class CatService {
  constructor(@Inject('SEQUELIZE') private sequelize: Sequelize) {}

  findAll() {
    return this.sequelize.models.Cat.findAll();
  }
}
