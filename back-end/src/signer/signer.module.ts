import { Module } from '@nestjs/common';
import { SignerController } from './signer.controller';
import { SignerService } from './signer.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule], // Import AuthModule to use AuthService
  controllers: [SignerController],
  providers: [SignerService],
})
export class SignerModule {}
