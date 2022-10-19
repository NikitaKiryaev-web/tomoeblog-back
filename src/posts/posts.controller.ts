import { CreatePostDto } from './dto/createPostDto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Post as Blog } from 'src/posts/interfaces/post.interface';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  async getPosts(): Promise<Blog[]> {
    return this.postsService.getPosts();
  }

  @Post()
  async addPost(@Body() createPostDto: CreatePostDto) {
    await this.postsService.addPost(createPostDto);
    return 'success';
  }
}
