import { CreatePostDto } from './dto/createPostDto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Post as Blog } from 'src/posts/interfaces/post.interface';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostController {
  constructor(private postsService: PostsService) {}

  @Get()
  async getPosts(): Promise<Blog[]> {
    return this.postsService.getPosts();
  }
  @Get(':id')
  async findPostById(@Param('id') id: string) {
    return this.postsService.getPostById(id);
  }

  @Post()
  async addPost(@Body() createPostDto: CreatePostDto) {
    await this.postsService.addPost(createPostDto);
    return 'success';
  }
}
