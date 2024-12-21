import { Controller, Post, Body } from '@nestjs/common';
import { UnsignedDocReceiveService } from './unsigned-doc-receive.service';
import { GatewayLinkReceiveService } from 'src/common/services/gateway-link-receive.service';
import {
  UnsignedDocReceiveReqDto,
  UnsignedDocReceiveResDto,
} from './dto/unsigned-doc-receive.dto';

@Controller('send-unsigned')
export class UnsignedDocReceiveController {
  constructor(
    private readonly unsignedReceiveService: UnsignedDocReceiveService,
    private readonly gatewayLinkService: GatewayLinkReceiveService,
  ) {}

  @Post()
  async receiveUnsignedDoc(
    @Body() docWithSignerInf: UnsignedDocReceiveReqDto,
  ): Promise<UnsignedDocReceiveResDto> {
    const { doc: docBase64, ...signerInf } = docWithSignerInf;

    const trackId =
      await this.unsignedReceiveService.storeUnsignedDoc(docBase64);

    const gatewayLink = await this.gatewayLinkService.getGatewayLink(
      signerInf,
      trackId,
    );

    return { gatewayLink };
  }
}
