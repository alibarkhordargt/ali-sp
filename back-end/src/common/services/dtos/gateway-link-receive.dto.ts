import { IsBoolean, IsNumber, IsString, IsUUID } from 'class-validator';

export class GetGatewayLinkReqDto {
  @IsUUID()
  trackId: string;

  @IsString()
  nationalId: string;

  @IsBoolean()
  sendSms: boolean;

  @IsString()
  userPhoneNumber: string;

  @IsString()
  documentApi: string;

  @IsString()
  callBackUrl: string;

  @IsString()
  docType: string;

  @IsNumber()
  certificateDiscount: number;

  @IsNumber()
  signDiscount: number;

  @IsString()
  apiVersion: string;
}

export class GetGatewayLinkResDto {
  @IsString()
  gatewayLink: string;
}
