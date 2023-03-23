import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CrudService } from './crud.service';

@Module({
  imports: [DatabaseModule],
  providers: [CrudService],
})
export class CrudModule {}
