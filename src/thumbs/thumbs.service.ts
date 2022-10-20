import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Thumb, ThumbDocument } from './schemas/thumbs.schema';
import { Model } from 'mongoose';
import { CreateThumbDto } from './dto/createThumbDto';

@Injectable()
export class ThumbService {
  constructor(
    @InjectModel(Thumb.name) private thumbModel: Model<ThumbDocument>,
  ) {}

  async addThumb(createPostDto: CreateThumbDto): Promise<Thumb> {
    const createdPost = new this.thumbModel(createPostDto);
    return createdPost.save();
  }
  async getThumbs() {
    return this.thumbModel.find().populate('post').exec();
  }
}
