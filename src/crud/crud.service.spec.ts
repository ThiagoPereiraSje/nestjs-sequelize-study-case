import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database/database.module';
import { CrudService } from './crud.service';

describe('CrudService', () => {
  let service: CrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ envFilePath: '.env.test' }),
        DatabaseModule,
      ],
      providers: [CrudService],
    }).compile();

    service = module.get<CrudService>(CrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be return 3 items', async () => {
    const cats = await service.cats();

    expect(cats.length).toBe(3);
  });
});
