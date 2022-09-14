import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PointStoreService } from './point_store.service';

@ApiTags('Point Store')
@Controller('point-store')
export class PointStoreController {
  constructor(private readonly pointStoreService: PointStoreService) {}
}
