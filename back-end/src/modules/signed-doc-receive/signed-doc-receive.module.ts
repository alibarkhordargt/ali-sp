import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignDocs } from 'src/common/entities/sign-docs.entity';
import { SignedDocReceiveController } from './signed-doc-receive.controller';
import { SignedDocReceiveService } from './signed-doc-receive.service';

@Module({
  imports: [TypeOrmModule.forFeature([SignDocs])],
  controllers: [SignedDocReceiveController],
  providers: [SignedDocReceiveService],
})
export class SignedDocReceiveModule {}
