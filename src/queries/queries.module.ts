import { Module } from '@nestjs/common';
import { CatService } from './cat/cat.service';

@Module({
  imports: [],
  providers: [CatService],
})
export class QueriesModule {}
