import { Module } from '@nestjs/common';
import { SignerModule } from './signer/signer.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, SignerModule], // Import both modules
})
export class AppModule {}
