import { IsString } from 'class-validator';

export class UnsignedDocRenderResDto {
  @IsString()
  pdf: string;
}
