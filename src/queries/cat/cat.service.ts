import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Cat from 'src/models/cat.entity';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat) private catModel: typeof Cat) {}

  findAll() {
    return this.catModel.findAll();
  }
}
