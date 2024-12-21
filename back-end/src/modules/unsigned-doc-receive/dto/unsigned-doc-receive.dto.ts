import { IsString } from 'class-validator';

export class UnsignedDocReceiveReqDto {
  @IsString()
  doc: string;

  @IsString()
  nationalId: string;

  @IsString()
  phoneNumber: string;
}

export class UnsignedDocReceiveResDto {
  @IsString()
  gatewayLink: string;
}
