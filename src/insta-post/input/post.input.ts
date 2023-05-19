import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class PostInput {
  @Field()
  readonly author: string;

  @Field()
  readonly caption: string;

  @Field(() => [String!]!)
  readonly mediaUrls: string[];

  @Field(() => [String], { nullable: true })
  readonly comments: string[];

  @Field(() => [String], { nullable: true })
  readonly likedBy: string[];
  
}

@InputType()
export class PostByIdInput {
  @Field()
  readonly id: string;
}

@InputType()
export class PostByAuthor {
  @Field()
  readonly author : string;
}

@InputType()
export class CommentByIdInput {
  @Field()
  readonly id: string;
  @Field()
  readonly comment: string;
}

@InputType()
export class LikeUnlikeInput {
  @Field()
  readonly authorId: string;
  @Field()
  readonly postId: string;
}

@InputType()
export class PaginationOptions {
  @Field(() => Int, {defaultValue : 1, nullable  :false})
  readonly pageNumber: number;
  @Field(() => Int, {defaultValue : 5, nullable : false})
  readonly size: number;
}