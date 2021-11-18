import { Test, TestingModule } from '@nestjs/testing';
import { LifehookService } from './lifehook.service';

describe('LifehookService', () => {
  let service: LifehookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LifehookService],
    }).compile();

    service = module.get<LifehookService>(LifehookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
