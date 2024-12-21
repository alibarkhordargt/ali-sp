import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignDocs } from 'src/common/entities/sign-docs.entity';
import { UnsignedDocRenderController } from './unsigned-doc-render.controller';
import { UnsignedDocRenderService } from './unsigned-doc-render.service';

@Module({
  imports: [TypeOrmModule.forFeature([SignDocs])],
  controllers: [UnsignedDocRenderController],
  providers: [UnsignedDocRenderService],
})
export class UnsignedDocRenderModule {}
