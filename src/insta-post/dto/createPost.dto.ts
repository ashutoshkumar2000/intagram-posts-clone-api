import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreatePostResponseDto {
    @Field(() => ID)
    id: string;

    @Field()
    readonly author: string;

    @Field()
    readonly caption: string;

    @Field(() => [String], { nullable: false })
    readonly mediaUrls: string[];

    @Field(() => Date)
    readonly createdAt: Date;

    @Field(() => [String])
    readonly comments: string[];

    @Field(() => [String])
    readonly likedBy: string[];
}
