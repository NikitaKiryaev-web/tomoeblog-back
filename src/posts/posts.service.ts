import { Injectable } from '@nestjs/common';
import { Post } from 'src/posts/interfaces/post.interface';

@Injectable()
export class PostsService {
  private readonly posts: Post[] = [];

  addPost(post: Post) {
    this.posts.push(post);
  }
  getPosts() {
    return this.posts;
  }
}
