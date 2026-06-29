import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SeedService {
  private isProd: boolean;

  constructor(private readonly configService: ConfigService) {
    this.isProd = configService.get('NEST_ENV') === 'prod';
  }

  async executeSeed(): Promise<boolean> {
    // Validate environment
    if (this.isProd) {
      throw new UnauthorizedException('We cannot run SEED on Prod environment');
    }

    // Limpiar la DB
    // Crear users
    // Crear items

    return true;
  }
}
