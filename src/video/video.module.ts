import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoResolver } from './video.resolver';
import { HttpModule } from '@nestjs/axios/dist';

@Module({
  imports: [HttpModule],
  providers: [VideoResolver, VideoService]
})
export class VideoModule {}
