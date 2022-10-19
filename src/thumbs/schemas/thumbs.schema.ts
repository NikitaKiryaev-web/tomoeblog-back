import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Post } from '../../posts/schemas/posts.schema';

export type ThumbDocument = Thumb & Document;

@Schema()
export class Thumb {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
  postId: Post;
}

export const ThumbSchema = SchemaFactory.createForClass(Thumb);
