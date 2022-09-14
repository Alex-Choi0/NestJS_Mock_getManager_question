import { Test, TestingModule } from '@nestjs/testing';
import { PointStoreController } from './point_store.controller';
import { PointStoreService } from './point_store.service';

describe('PointStoreController', () => {
  let controller: PointStoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PointStoreController],
      providers: [PointStoreService],
    }).compile();

    controller = module.get<PointStoreController>(PointStoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
