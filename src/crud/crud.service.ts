import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class CrudService {
  constructor(@Inject('SEQUELIZE') private sequelize: Sequelize) {}

  async cats() {
    try {
      return await this.sequelize.models.Cat.findAll();
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
}
