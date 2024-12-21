import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private nestConfigService: NestConfigService) {}

  get(key: string): string {
    return this.nestConfigService.get<string>(key);
  }

  getDatabaseHost(): string {
    return this.get('PG_HOST');
  }

  getDatabasePort(): number {
    return parseInt(this.get('PG_PORT'), 10);
  }

  getDatabaseUsername(): string {
    return this.get('PG_USERNAME');
  }

  getDatabasePassword(): string {
    return this.get('PG_PASSWORD');
  }

  getDatabaseName(): string {
    return this.get('PG_NAME');
  }
}
