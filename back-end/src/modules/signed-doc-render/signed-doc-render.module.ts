import { Module } from '@nestjs/common';
import { SignedDocRenderController } from './signed-doc-render.controller';
import { SignedDocRenderService } from './signed-doc-render.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignDocs } from 'src/common/entities/sign-docs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SignDocs])],
  controllers: [SignedDocRenderController],
  providers: [SignedDocRenderService],
})
export class SignedDocRenderModule {}
