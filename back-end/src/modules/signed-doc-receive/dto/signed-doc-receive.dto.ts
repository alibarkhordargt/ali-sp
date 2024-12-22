import { IsNumber, IsString } from 'class-validator';

export class SignedDocReceiveReqDto {
  @IsString()
  trackId: string;

  @IsString()
  pdf: string;

  @IsNumber()
  errorCode: number;

  @IsString()
  message: string;
}

export class SignedDocReceiveResDto {
  @IsString()
  redirectUrl: string;
}
