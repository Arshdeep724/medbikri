import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoResolver } from './video.resolver';
import { HttpModule } from '@nestjs/axios/dist';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Video } from './entities/video.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Video])],
  providers: [VideoResolver, VideoService],
})
export class VideoModule {}
