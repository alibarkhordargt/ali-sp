import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { error } from 'console';
import { EmzagarAuthService } from './emzagar-auth.service';
import {
  GetGatewayLinkReqDto,
  GetGatewayLinkResDto,
} from './dtos/gateway-link-receive.dto';
import { EmzagarAuthReqDto } from './dtos/emzagar-auth.dto';
import { SignerInf } from '../interfaces/gateway-link-receive';

@Injectable()
export class GatewayLinkReceiveService {
  constructor(
    private readonly httpService: HttpService,
    private readonly emzagarAuthService: EmzagarAuthService,
  ) {}

  private async getToken(): Promise<string> {
    const emzagarAuthBodyParams: EmzagarAuthReqDto = {
      username: 'sp_dadkhah',
      password: '!qw2U5$mO',
      apiVersion: '1.1.0',
    };

    const token = await this.emzagarAuthService.getToken(emzagarAuthBodyParams);

    return token;
  }

  async getGatewayLink(
    { nationalId, phoneNumber: userPhoneNumber }: SignerInf,
    trackId: string,
  ): Promise<string> {
    const url = 'http://192.168.42.107:8086/gateway/link/get';
    const getGatewayLinkBodyParams: GetGatewayLinkReqDto = {
      nationalId,
      userPhoneNumber,
      trackId,
      sendSms: true,
      docType: 'DOCUMENT',
      documentApi: 'http://192.168.61.47:3001/receive-unsigned',
      callBackUrl: 'http://192.168.61.47:3001/send-signed',
      certificateDiscount: 100,
      signDiscount: 100,
      apiVersion: '1.1.0',
    };

    const bearerToken = await this.getToken();

    try {
      const {
        data: { gatewayLink: gatewayLinkOnDomain },
      }: { data: GetGatewayLinkResDto } = await this.httpService.axiosRef.post(
        url,
        getGatewayLinkBodyParams,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        },
      );

      const gatewayLink = `http://192.168.42.107${gatewayLinkOnDomain.split('.com')[1]}`;

      return gatewayLink;
    } catch (err) {
      error('Error API fetch /gateway/link/get:', err);
      throw new HttpException(
        'Error getting Emzagar gateway link!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
