import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Item } from 'src/items/entities/item.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class SeedService {
  private isProd: boolean;

  constructor(
    private readonly configService: ConfigService,

    @InjectRepository(Item)
    private readonly itemsRepository: Repository<Item>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {
    this.isProd = configService.get('NEST_ENV') === 'prod';
  }

  async executeSeed(): Promise<boolean> {
    // Validate environment
    if (this.isProd) {
      throw new UnauthorizedException('We cannot run SEED on Prod environment');
    }

    // Limpiar la DB
    await this.deleteDB();
    // Crear users
    // Crear items

    return true;
  }

  async deleteDB() {
    // Delete items
    await this.itemsRepository
      .createQueryBuilder()
      .delete()
      .where({})
      .execute();
    // Delete users
    await this.usersRepository
      .createQueryBuilder()
      .delete()
      .where({})
      .execute();
  }
}
