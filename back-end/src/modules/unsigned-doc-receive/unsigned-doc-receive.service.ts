import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SignDocs } from 'src/common/entities/sign-docs.entity';
import generateTrackId from 'src/common/utils/track-id-generate.util';
import { convertToBuffer } from 'src/common/utils/doc-format-convert.util';
import { storeDoc } from 'src/common/utils/doc-path-handle.util';

@Injectable()
export class UnsignedDocReceiveService {
  constructor(
    @InjectRepository(SignDocs)
    private signDocsRepository: Repository<SignDocs>,
  ) {}

  async storeUnsignedDoc(docBase64: string): Promise<string> {
    const docBuffer = convertToBuffer(docBase64);
    const trackId = generateTrackId();
    const unsignedDocPath = `docs/unsigned/${trackId}.pdf`;
    const signDocs = this.signDocsRepository.create({
      trackId,
      unsignedDocPath,
      signedDocPath: null,
    });

    await storeDoc(unsignedDocPath, docBuffer);

    await this.signDocsRepository.save(signDocs);

    return trackId;
  }
}
