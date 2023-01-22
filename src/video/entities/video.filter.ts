import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class VideoFilter {
  @Field(() => String)
  title: string;
  @Field(() => String)
  description: string;
}
