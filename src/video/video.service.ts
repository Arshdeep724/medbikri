import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateVideoInput } from './dto/create-video.input';
import { UpdateVideoInput } from './dto/update-video.input';
import { Video } from './entities/video.entity';

@Injectable()
export class VideoService {
  constructor(@InjectRepository(Video) private videoRepositary: Repository<Video>){

  }

  async findAll(): Promise<Video[]> {
    return this.videoRepositary.find();
  }
}
