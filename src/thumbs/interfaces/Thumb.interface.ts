import { Post } from '../../posts/interfaces/post.interface';

export interface Thumb {
  thumb: string;
  post: Post;
  title: string;
  text: string;
}
