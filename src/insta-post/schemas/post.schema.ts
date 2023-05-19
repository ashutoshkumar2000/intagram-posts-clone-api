import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop()
  author: string;

  @Prop()
  caption: string;

  @Prop({
    type: [String],
    validate: [
      {
        validator: function (array: string[]) {
          return array.length > 0;
        },
        message: 'Posts must not be empty.',
      },
      {
        validator: function (array: string[]) {
          return array.length <= 10;
        },
        message: 'Post limit of 10 media items exceeded',
      }
    ]
  })
  mediaUrls : string[];

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: [] })
  likedBy: string[];
  
  @Prop({ default: [] })
  comments: string[];


}

export const PostSchema = SchemaFactory.createForClass(Post);