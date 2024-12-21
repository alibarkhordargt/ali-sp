import { Controller, Post, Body } from '@nestjs/common';
import { SignedDocRenderService } from './signed-doc-render.service';
import {
  SignedDocRenderReqDto,
  SignedDocRenderResDto,
} from './dto/signed-doc-render.dto';

@Controller('receive-signed')
export class SignedDocRenderController {
  constructor(
    private readonly signedDocRenderService: SignedDocRenderService,
  ) {}

  @Post()
  async renderSignedDoc(
    @Body() signedDocRenderReqDto: SignedDocRenderReqDto,
  ): Promise<SignedDocRenderResDto> {
    const docBase64 = await this.signedDocRenderService.renderSignedDoc(
      signedDocRenderReqDto,
    );

    return { doc: docBase64 };
  }
}
