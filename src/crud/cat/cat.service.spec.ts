import { Test, TestingModule } from '@nestjs/testing';
import { testModule } from '../../test/test.module';
import { CatService } from './cat.service';

describe('CatService', () => {
  let service: CatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...testModule],
      providers: [CatService],
    }).compile();

    service = module.get<CatService>(CatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
