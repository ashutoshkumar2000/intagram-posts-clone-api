
import { Model, set } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CommentByIdInput, LikeUnlikeInput, PaginationOptions, PostByAuthor, PostByIdInput, PostInput } from './input/post.input';
import { Post } from './schemas/post.schema';
import { IPost } from './interface/i-post.interface';

@Injectable()
export class InstaPostService {
  constructor(@InjectModel(Post.name) private postModelService: Model<Post>) {}

  async create(createPost: PostInput): Promise<Post> {
    const createdPost = new this.postModelService(createPost);
    return createdPost.save();
  }

  async findAll(paginationOptions: PaginationOptions): Promise<IPost[]> {
    const skipPages = (paginationOptions.pageNumber-1) * paginationOptions.size;
    return this.postModelService.find().skip(skipPages).limit(paginationOptions.size).exec();
  }

  async findById(input: PostByIdInput): Promise<IPost> {
    return this.postModelService.findById(input.id).exec();
  }
  async findByAuthor(input : PostByAuthor) : Promise<IPost[]> {
    return this.postModelService.find({author : input.author}).sort({['createdAt'] : -1}).exec();
  } 

  async addCommentById(input: CommentByIdInput) : Promise <Boolean> {
    return this.postModelService.updateOne({_id: input.id}, {$push : {comments: input.comment}}).exec() ? true : false;
  }

  async updateLike(input: LikeUnlikeInput) : Promise<{count : number}>  {
    const likedBy = (await this.postModelService.findById(input.postId, {likedBy : 1}).exec()).likedBy;
    let updateCondition : any;
    if(likedBy.includes(input.authorId)){
      updateCondition = {$pull : {likedBy: input.authorId}};
    }
    else{
      updateCondition = {$push : {likedBy: input.authorId}};
    }
    const res = await this.postModelService.findOneAndUpdate({_id: input.postId}, updateCondition, {new : true}).exec();
    console.log(res);
    return {count : res.likedBy.length};
  }
}
