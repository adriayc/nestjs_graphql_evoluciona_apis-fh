import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SeedService } from './seed.service';
import { SeedResolver } from './seed.resolver';
import { ItemsModule } from 'src/items/items.module';
import { UsersModule } from 'src/users/users.module';
import { ListItemModule } from 'src/list-item/list-item.module';
import { ListsModule } from 'src/lists/lists.module';

@Module({
  providers: [SeedResolver, SeedService],
  imports: [
    // Config module (env)
    ConfigModule,
    // Users module
    UsersModule,
    // Items module
    ItemsModule,
    // List item module
    ListItemModule,
    // List module
    ListsModule,
  ],
})
export class SeedModule {}
