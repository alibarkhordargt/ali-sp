import { IsNumber, IsString } from 'class-validator';

export class EmzagarAuthReqDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  apiVersion: string;
}

export class EmzagarAuthResDto {
  @IsString()
  token: string;

  @IsNumber()
  tokenExpiresIn: number;
}
