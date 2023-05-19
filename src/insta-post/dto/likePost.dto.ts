import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LikeResponseDto {
    @Field(() => Int) 
    readonly count : number;
}