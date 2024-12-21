import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { UnsignedDocReceiveModule } from './modules/unsigned-doc-receive/unsigned-doc-receive.module';
import { UnsignedDocRenderModule } from './modules/unsigned-doc-render/unsigned-doc-render.module';
import { SignedDocReceiveModule } from './modules/signed-doc-receive/signed-doc-receive.module';
import { SignedDocRenderModule } from './modules/signed-doc-render/signed-doc-render.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    UnsignedDocReceiveModule,
    UnsignedDocRenderModule,
    SignedDocReceiveModule,
    SignedDocRenderModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/send-signed', '/receive-unsigned');
  }
}
