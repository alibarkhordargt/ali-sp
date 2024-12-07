import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateTokenDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('get/token')
  async getToken(@Body() createTokenDto: CreateTokenDto) {
    return this.authService.getToken(createTokenDto);
  }
}
