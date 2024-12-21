import { IsString } from 'class-validator';

export class SignedDocReceiveReqDto {
  @IsString()
  trackId: string;

  @IsString()
  pdf: string;

  @IsString()
  errorCode: string;

  @IsString()
  message: string;
}

export class SignedDocReceiveResDto {
  @IsString()
  redirectUrl: string;
}
