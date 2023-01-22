import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VideoService } from './video.service';
import { Video } from './entities/video.entity';
import { CreateVideoInput } from './dto/create-video.input';
import { UpdateVideoInput } from './dto/update-video.input';
import { Cron, CronExpression } from '@nestjs/schedule/dist';
import { HttpService } from '@nestjs/axios';

@Resolver(() => Video)
export class VideoResolver {
  constructor(private readonly videoService: VideoService,
    private readonly httpService: HttpService) {}
  
  @Query(() => [Video],{name: "getAllVideos"})
  findAll(){
    return this.videoService.findAll();
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  @Query(() => Video,{name: "addYTdata"})
  async getYTdata() {
    const url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBGwx9fPNGSaToRTIESsWxMR3zxljBD_XE&q=cricket&part=snippet&type=video&order=date&publishedAfter=2022-11-30T18:30:00.000Z';
    const response = await this.httpService.axiosRef.get(url);
    console.log(response.data.items.map((item)=> {
      return {
        title: item.snippet.title,
        description: item.snippet.description,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        publishedDate: item.snippet.publishedAt,
        thumbnail: item.snippet.thumbnails
      };
    }));
    return {};
  }
}
