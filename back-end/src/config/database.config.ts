import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SignDocs } from 'src/common/entities/sign-docs.entity';
import { ConfigService } from './config.service';

export const getDatabaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: configService.getDatabaseHost(),
    port: configService.getDatabasePort(),
    username: configService.getDatabaseUsername(),
    password: configService.getDatabasePassword(),
    database: configService.getDatabaseName(),
    entities: [SignDocs],
    synchronize: true,
  };
};
