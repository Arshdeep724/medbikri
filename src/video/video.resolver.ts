import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VideoService } from './video.service';
import { Video } from './entities/video.entity';
import { CreateVideoInput } from './dto/create-video.input';
import { Cron, CronExpression } from '@nestjs/schedule/dist';
import { HttpService } from '@nestjs/axios';
import { VideoFilter } from './entities/video.filter';

@Resolver(() => Video)
export class VideoResolver {
  constructor(
    private readonly videoService: VideoService,
    private readonly httpService: HttpService,
  ) {}

  @Query(() => [Video], { name: 'getAllVideos' })
  findAll() {
    return this.videoService.findAll();
  }

  @Query(() => Video, { name: 'searchByTitleAndDescription' })
  findSpecific(@Args('filter') filter: VideoFilter) {
    return this.videoService.findSpecific(filter);
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  @Query(() => [Video], { name: 'addYTdata' })
  async getYTdata() {
    const url =
      'https://www.googleapis.com/youtube/v3/search?key=' +
      process.env.YOUTUBE_API_KEY +
      '&q=cricket&part=snippet&type=video&order=date&publishedAfter=2022-11-30T18:30:00.000Z';
    const response = await this.httpService.axiosRef.get(url);
    for (const item of response.data.items) {
      const obj: CreateVideoInput = {
        title: item.snippet.title,
        description: item.snippet.description,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        publishedDate: item.snippet.publishedAt,
        thumbnail: item.snippet.thumbnails.default.url,
      };
      await this.videoService.create(obj);
    }
    return [];
  }
}
