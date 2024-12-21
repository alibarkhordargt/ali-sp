import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignDocs } from 'src/common/entities/sign-docs.entity';
import { CommonModule } from 'src/common/common.module';
import { UnsignedDocReceiveController } from './unsigned-doc-receive.controller';
import { UnsignedDocReceiveService } from './unsigned-doc-receive.service';

@Module({
  imports: [TypeOrmModule.forFeature([SignDocs]), CommonModule],
  controllers: [UnsignedDocReceiveController],
  providers: [UnsignedDocReceiveService],
})
export class UnsignedDocReceiveModule {}
