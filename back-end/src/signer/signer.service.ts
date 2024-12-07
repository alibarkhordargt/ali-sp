import { Injectable } from '@nestjs/common';
import { SignerDto } from './dto/signer.dto';
import { AuthService } from '../auth/auth.service';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SignerService {
  constructor(private readonly authService: AuthService) {}

  async linkGet(signerDto: SignerDto) {
    // Get token first
    const tokenData = await this.authService.getToken({
      username: 'your-username',
      password: 'your-password',
      apiVersion: '1.1.0',
    });
    const token = tokenData.token; // Bearer Token

    const trackId = uuidv4(); // Generate trackId for signer service

    const { nationalId, phoneNumber } = signerDto;

    const response = await axios.post(
      'https://apisandbox.emzagar.com/gateway/link/get',
      {
        nationalId,
        trackId,
        sendSms: false,
        phoneNumber,
        documentApi: 'http://localhost:3000',
        callBackUrl: 'http://localhost:3000',
        docType: 'document',
        certificateDiscount: 100,
        signDiscount: 100,
        apiVersion: '1.1.0',
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  }
}
