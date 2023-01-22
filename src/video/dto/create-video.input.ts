import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateVideoInput {
  @Field()
  title: string;
  @Field()
  description: string;
  @Field()
  url: string;
  @Field()
  publishedDate: string;
  @Field()
  thumbnail: string;
}
