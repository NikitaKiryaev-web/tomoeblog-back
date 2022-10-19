import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop()
  postId: number;

  @Prop()
  postImage: string;

  @Prop({ required: true })
  postTitle: string;

  @Prop({ required: true })
  sections: [
    {
      title: string;
      text: string;
    },
  ];
}

export const PostSchema = SchemaFactory.createForClass(Post);
