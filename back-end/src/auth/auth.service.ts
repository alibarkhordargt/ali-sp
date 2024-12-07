import { Injectable } from '@nestjs/common';
import { CreateTokenDto } from './dto/auth.dto';
import axios from 'axios';

@Injectable()
export class AuthService {
  async getToken(createTokenDto: CreateTokenDto) {
    const { username, password, apiVersion } = createTokenDto;
    const response = await axios.post(
      'https://apisandbox.emzagar.com/auth/get/token',
      {
        username,
        password,
        apiVersion,
      },
    );
    return response.data; // { token, tokenExpiresIn }
  }
}
