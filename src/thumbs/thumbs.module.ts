import { ThumbController } from './thumbs.controller';
import { Module } from '@nestjs/common';
import { ThumbService } from './thumbs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Thumb, ThumbSchema } from './schemas/thumbs.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Thumb.name, schema: ThumbSchema }]),
  ],
  controllers: [ThumbController],
  providers: [ThumbService],
})
export class ThumbModule {}
