import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateVideoInput } from './dto/create-video.input';
import { Video } from './entities/video.entity';
import { VideoFilter } from './entities/video.filter';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video) private videoRepositary: Repository<Video>,
  ) {}

  async findAll(): Promise<Video[]> {
    return this.videoRepositary.find({ order: { publishedDate: 'DESC' } });
  }

  async create(video: CreateVideoInput): Promise<Video> {
    const obj = this.videoRepositary.create(video);
    return this.videoRepositary.save(obj);
  }

  async findSpecific(filter: VideoFilter) {
    return this.videoRepositary.find({ where: filter });
  }
}
