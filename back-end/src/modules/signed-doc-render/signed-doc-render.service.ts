import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SignDocs } from 'src/common/entities/sign-docs.entity';
import { SignedDocRenderReqDto } from './dto/signed-doc-render.dto';
import { convertToBase64 } from 'src/common/utils/doc-format-convert.util';
import { renderDoc } from 'src/common/utils/doc-path-handle.util';

@Injectable()
export class SignedDocRenderService {
  constructor(
    @InjectRepository(SignDocs)
    private signDocsRepository: Repository<SignDocs>,
  ) {}

  async renderSignedDoc({ trackId }: SignedDocRenderReqDto): Promise<string> {
    const signDocs = await this.signDocsRepository.findOne({
      where: { trackId },
    });

    if (!signDocs) {
      throw new HttpException(
        'No Documents found with this track id',
        HttpStatus.NOT_FOUND,
      );
    }

    const signedDocPath = signDocs.signedDocPath;
    const docBuffer = await renderDoc(signedDocPath);
    const docBase64 = convertToBase64(docBuffer);

    return docBase64;
  }
}
