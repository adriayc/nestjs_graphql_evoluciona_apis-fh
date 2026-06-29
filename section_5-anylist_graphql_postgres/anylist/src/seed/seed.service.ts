import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Item } from 'src/items/entities/item.entity';
import { User } from 'src/users/entities/user.entity';
import { SEED_ITEMS, SEED_USERS } from './data/seed-data';
import { UsersService } from 'src/users/users.service';
import { ItemsService } from 'src/items/items.service';

@Injectable()
export class SeedService {
  private isProd: boolean;

  constructor(
    private readonly configService: ConfigService,

    @InjectRepository(Item)
    private readonly itemsRepository: Repository<Item>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    private readonly userService: UsersService,
    private readonly itemsService: ItemsService,
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
    const user = await this.loadUsers();

    // Crear items
    await this.loadItems(user);

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

  async loadUsers(): Promise<User> {
    const users: User[] = [];

    for (const user of SEED_USERS) {
      users.push(await this.userService.create(user));
    }

    return users[0];
  }

  async loadItems(user: User): Promise<void> {
    const itemsPromise: Promise<Item>[] = [];

    for (const item of SEED_ITEMS) {
      itemsPromise.push(this.itemsService.create(item, user));
    }

    await Promise.all(itemsPromise);
  }
}
