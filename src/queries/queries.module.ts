import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CatService } from './cat/cat.service';

@Module({
  imports: [DatabaseModule],
  providers: [CatService],
})
export class QueriesModule {}
