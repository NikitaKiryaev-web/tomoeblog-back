import { CreatePostDto } from './dto/createPostDto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Post as Blog } from 'src/posts/interfaces/post.interface';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsServie: PostsService) {}

  @Get()
  async getPosts(): Promise<Blog[]> {
    return this.postsServie.getPosts();
  }

  @Post()
  async addPost(@Body() createPostDto: CreatePostDto) {
    this.postsServie.addPost(createPostDto);
    return 'success';
  }
}
