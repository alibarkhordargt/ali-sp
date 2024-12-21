import { IsString } from 'class-validator';

export class SignedDocRenderReqDto {
  @IsString()
  trackId: string;
}

export class SignedDocRenderResDto {
  @IsString()
  doc: string;
}
