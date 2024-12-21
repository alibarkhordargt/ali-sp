import { Module } from '@nestjs/common';
import { EmzagarAuthService } from './services/emzagar-auth.service';
import { GatewayLinkReceiveService } from './services/gateway-link-receive.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [EmzagarAuthService, GatewayLinkReceiveService],
  exports: [EmzagarAuthService, GatewayLinkReceiveService],
})
export class CommonModule {}
