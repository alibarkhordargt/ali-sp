import { Controller, Post, Body } from '@nestjs/common';
import { SignerService } from './signer.service';
import { SignerDto } from './dto/signer.dto';

@Controller('signer')
export class SignerController {
  constructor(private readonly signerService: SignerService) {}

  @Post('link/get')
  async linkGet(@Body() signerDto: SignerDto) {
    return this.signerService.linkGet(signerDto);
  }
}
