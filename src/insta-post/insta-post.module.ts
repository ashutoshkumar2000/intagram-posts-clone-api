import { Module } from '@nestjs/common';
import { InstaPostResolver } from './insta-post.resolver';
import { InstaPostService } from './insta-post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './schemas/post.schema';

@Module({
  imports : [MongooseModule. forFeature ([{ name: 'Post', schema: PostSchema }])],
  providers: [InstaPostResolver, InstaPostService]
})
export class InstaPostModule {}
