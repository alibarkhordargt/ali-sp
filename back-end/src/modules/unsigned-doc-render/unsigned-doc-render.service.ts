import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SignDocs } from 'src/common/entities/sign-docs.entity';
import { convertToBase64 } from 'src/common/utils/doc-format-convert.util';
import { renderDoc } from 'src/common/utils/doc-path-handle.util';

@Injectable()
export class UnsignedDocRenderService {
  constructor(
    @InjectRepository(SignDocs)
    private signDocsRepository: Repository<SignDocs>,
  ) {}

  async renderUnsignedDoc(trackId: string): Promise<string> {
    const signDocs = await this.signDocsRepository.findOne({
      where: { trackId },
    });

    if (!signDocs) {
      throw new HttpException(
        'No Documents found with this track id',
        HttpStatus.NOT_FOUND,
      );
    }

    const unsignedDocPath = signDocs.unsignedDocPath;
    const docBuffer = await renderDoc(unsignedDocPath);
    const docBase64 = convertToBase64(docBuffer);

    return docBase64;
  }
}
