import { Body, Controller, Get, Post } from '@nestjs/common';
import { ThumbService } from './thumbs.service';
import { CreateThumbDto } from './dto/createThumbDto';
import { Thumb } from './interfaces/Thumb.interface';

@Controller('thumbs')
export class ThumbController {
  constructor(private thumbService: ThumbService) {}

  @Get()
  async getThumbs(): Promise<Thumb[]> {
    return this.thumbService.getThumbs();
  }

  @Post()
  async addPost(@Body() createThumbDto: CreateThumbDto) {
    await this.thumbService.addThumb(createThumbDto);
    return 'success';
  }
}
