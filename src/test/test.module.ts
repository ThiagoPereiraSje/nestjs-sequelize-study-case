import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';

export const testModule = [
  ConfigModule.forRoot({ envFilePath: '.env.test' }),
  DatabaseModule,
];
