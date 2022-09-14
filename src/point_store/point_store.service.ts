import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { PointsEntity } from './entities/point_store.entity';

@Injectable()
export class PointStoreService {
  constructor(
    @InjectRepository(PointsEntity)
    private readonly pointsRepository: Repository<PointsEntity>,
  ) {}

  async searchPoints(startDate: Date, endDate: Date, userId: string) {
    try {
      return await getManager().query(`
        SELECT * FROM points WHERE expire_at
        BETWEEN '${startDate.toISOString()}' AND '${endDate.toISOString()}'
        AND "userId"='${userId}'
      `);
    } catch (err) {
      throw new HttpException(err.message, err.state ? err.state : 500);
    }
  }
}
