import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Video {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field()
  @Column()
  title: string;
  @Field()
  @Column()
  description: string;
  @Field()
  @Column()
  url: string;
  @Field()
  @Column()
  publishedDate: string;
  @Field()
  @Column()
  thumbnail: string;
}
