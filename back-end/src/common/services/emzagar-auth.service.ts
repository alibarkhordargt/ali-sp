import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { error } from 'console';
import { EmzagarAuthReqDto, EmzagarAuthResDto } from './dtos/emzagar-auth.dto';

@Injectable()
export class EmzagarAuthService {
  public token: string | null = null;
  public tokenExpiresAt: number | null = null;

  constructor(private readonly httpService: HttpService) {}

  async getToken(emzagarAuthBodyParams: EmzagarAuthReqDto): Promise<string> {
    if (this.token && this.tokenExpiresAt && Date.now() < this.tokenExpiresAt) {
      return this.token;
    }

    const url = 'http://192.168.42.107:8086/auth/get/token';

    try {
      const res = await this.httpService.axiosRef.post<EmzagarAuthResDto>(
        url,
        emzagarAuthBodyParams,
      );

      this.token = res.data.token;
      this.tokenExpiresAt = Date.now() + res.data.tokenExpiresIn * 1000;

      return this.token;
    } catch (err) {
      error('Error API fetch /auth/get/token:', err);
      throw new HttpException(
        'Error getting Emzagar auth token!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
