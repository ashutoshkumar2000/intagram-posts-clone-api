
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CreatePostResponseDto } from './dto/createPost.dto';
import { InstaPostService } from './insta-post.service';
import { CommentByIdInput, LikeUnlikeInput, PaginationOptions, PostByAuthor, PostByIdInput, PostInput } from 'src/insta-post/input/post.input';
import { LikeResponseDto } from './dto/likePost.dto';

@Resolver()
export class InstaPostResolver {

constructor (private instaPostService : InstaPostService) {}
    @Query (() => String)
    async hello() {
        return 'hello world';
    }
    @Query ( () => [CreatePostResponseDto])
    async posts (@Args('input') paginationOptions : PaginationOptions) {
        return this. instaPostService. findAll(paginationOptions);
    }

    @Query ( () => CreatePostResponseDto)
    async postById (@Args('input') input : PostByIdInput) {
        return this. instaPostService. findById(input);
    }

    @Query ( () => [CreatePostResponseDto])
    async postsByAuthor (@Args('input') input : PostByAuthor) {
        return this. instaPostService. findByAuthor(input);
    }

    @Mutation( () =>  Boolean)
    async addCommentById ( @Args('input') input: CommentByIdInput) {
        return this.instaPostService. addCommentById(input);
    }

    @Mutation ( () => CreatePostResponseDto)
    async createPost ( @Args('input') input: PostInput) {
        return this.instaPostService. create(input);
    }

    @Mutation(() => LikeResponseDto)
    async likePost ( @Args('input') input: LikeUnlikeInput) {
        return this.instaPostService. updateLike(input);
    }

}
