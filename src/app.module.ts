import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstaPostModule } from './insta-post/insta-post.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      introspection: true
    }),
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: 'mongodb+srv://admin:admin@projectdb.xnrohjb.mongodb.net/?retryWrites=true&w=majority',
        dbName: 'instagram'
      }),
    }),
    InstaPostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
