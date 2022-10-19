import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schemas/posts.schema';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/createPostDto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async addPost(createPostDto: CreatePostDto): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }
  async getPosts() {
    return this.postModel.find().exec();
  }
  async getPostById(id: string) {
    return this.postModel.findById(id);
  }
}
