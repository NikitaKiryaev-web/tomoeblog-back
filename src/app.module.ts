import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ThumbModule } from './thumbs/thumbs.module';

@Module({
  imports: [
    PostsModule,
    ThumbModule,
    MongooseModule.forRoot('mongodb://localhost:27017'),
  ],
})
export class AppModule {}
