import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ListsService } from './lists.service';
import { ListsResolver } from './lists.resolver';
import { List } from './entities/list.entity';

@Module({
  providers: [ListsResolver, ListsService],
  imports: [
    // TypeOrmModule setup
    TypeOrmModule.forFeature([List]),
  ],
  exports: [
    // ListService
    ListsService,
  ],
})
export class ListsModule {}
