import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SignDocs } from 'src/common/entities/sign-docs.entity';
import { SignedDocReceiveReqDto } from './dto/signed-doc-receive.dto';
import { convertToBuffer } from 'src/common/utils/doc-format-convert.util';
import { storeDoc } from 'src/common/utils/doc-path-handle.util';

@Injectable()
export class SignedDocReceiveService {
  constructor(
    @InjectRepository(SignDocs)
    private signDocsRepository: Repository<SignDocs>,
  ) {}

  async storeSignedDoc({
    trackId,
    pdf: docBase64,
  }: SignedDocReceiveReqDto): Promise<string> {
    if (docBase64.length === 0) return 'http://localhost:3000/fail';

    const docBuffer = convertToBuffer(docBase64);
    const signedDocPath = `docs/signed/${trackId}.pdf`;

    await storeDoc(signedDocPath, docBuffer);

    const signDocs = await this.signDocsRepository.findOne({
      where: { trackId },
    });

    if (!signDocs) {
      throw new HttpException(
        'No documents existing with this track id!',
        HttpStatus.BAD_REQUEST,
      );
    }

    signDocs.signedDocPath = signedDocPath;
    await this.signDocsRepository.save(signDocs);

    return `http://localhost:3000/success/${trackId}`;
  }
}
