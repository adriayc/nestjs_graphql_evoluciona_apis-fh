import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SeedService } from './seed.service';
import { SeedResolver } from './seed.resolver';
import { ItemsModule } from 'src/items/items.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [SeedResolver, SeedService],
  imports: [
    // Config module (env)
    ConfigModule,
    // Users module
    UsersModule,
    // Items module
    ItemsModule,
  ],
})
export class SeedModule {}
