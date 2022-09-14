import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as typeorm from 'typeorm';
import { PointsEntity } from './entities/point_store.entity';
import { PointStoreService } from './point_store.service';

const mockPointsRepository = {
  save: jest.fn(),
};

describe('PointStoreService', () => {
  let service: PointStoreService;
  let repository: typeorm.Repository<PointsEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PointStoreService,
        {
          provide: getRepositoryToken(PointsEntity),
          useValue: mockPointsRepository,
        },
      ],
    }).compile();
    jest.resetModules(); // Most important - it clears the cache
    service = module.get<PointStoreService>(PointStoreService);
    repository = module.get(getRepositoryToken(PointsEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('searchPoints', () => {
    it('should searchPoints', async () => {
      // can not mock getManager!!!
      jest.spyOn(getManager, 'query');
    });
  });
});
