import { Controller, Query, Get } from '@nestjs/common';
import { UnsignedDocRenderService } from './unsigned-doc-render.service';
import { UnsignedDocRenderResDto } from './dto/unsigned-doc-render.dto';

@Controller('receive-unsigned')
export class UnsignedDocRenderController {
  constructor(
    private readonly unsignedDocRenderService: UnsignedDocRenderService,
  ) {}

  @Get()
  async renderUnsignedDoc(
    @Query('trackId') trackId: string,
  ): Promise<UnsignedDocRenderResDto> {
    const docBase64 =
      await this.unsignedDocRenderService.renderUnsignedDoc(trackId);

    return { pdf: docBase64 };
  }
}
