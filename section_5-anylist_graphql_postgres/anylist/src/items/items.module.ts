import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemsService } from './items.service';
import { ItemsResolver } from './items.resolver';
import { Item } from './entities/item.entity';

@Module({
  providers: [ItemsResolver, ItemsService],
  imports: [
    // TypeORM config
    TypeOrmModule.forFeature([Item]),
  ],
  exports: [
    // Item service
    ItemsService,
  ],
})
export class ItemsModule {}
