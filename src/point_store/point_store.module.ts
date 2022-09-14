import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointsEntity } from './entities/point_store.entity';
import { PointStoreController } from './point_store.controller';
import { PointStoreService } from './point_store.service';

@Module({
  imports: [TypeOrmModule.forFeature([PointsEntity])],
  controllers: [PointStoreController],
  providers: [PointStoreService],
  exports: [PointStoreService],
})
export class PointStoreModule {}
