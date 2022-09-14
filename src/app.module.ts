import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PointStoreModule } from './point_store/point_store.module';

@Module({
  imports: [ConfigModule.forRoot(), PointStoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
