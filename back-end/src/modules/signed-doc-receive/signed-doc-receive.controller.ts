import { Controller, Post, Body } from '@nestjs/common';
import {
  SignedDocReceiveReqDto,
  SignedDocReceiveResDto,
} from './dto/signed-doc-receive.dto';
import { SignedDocReceiveService } from './signed-doc-receive.service';

@Controller('send-signed')
export class SignedDocReceiveController {
  constructor(
    private readonly signedDocReceiveService: SignedDocReceiveService,
  ) {}

  @Post()
  async receiveSignedDoc(
    @Body() receiveSignedReqDto: SignedDocReceiveReqDto,
  ): Promise<SignedDocReceiveResDto> {
    const redirectUrl =
      await this.signedDocReceiveService.storeSignedDoc(receiveSignedReqDto);

    return { redirectUrl };
  }
}
