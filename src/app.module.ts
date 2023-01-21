import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoModule } from './video/video.module';

@Module({
  imports: [VideoModule,ScheduleModule.forRoot(),HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
