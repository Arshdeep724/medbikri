import { ApolloDriver } from '@nestjs/apollo';
import { ApolloDriverConfig } from '@nestjs/apollo/dist/interfaces';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoModule } from './video/video.module';

@Module({
  imports: [VideoModule,ScheduleModule.forRoot(),HttpModule,GraphQLModule.forRoot<ApolloDriverConfig>({
    autoSchemaFile: join(process.cwd(),'src/graphql-schema.gql'),
    driver: ApolloDriver
  }),TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'lokinava',
    database: 'postgres',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
