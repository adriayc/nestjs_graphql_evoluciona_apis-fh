import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

import { List } from 'src/lists/entities/list.entity';
import { Item } from 'src/items/entities/item.entity';

@Entity({ name: 'listItems' })
@ObjectType()
export class ListItem {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id!: string;

  @Column({ type: 'numeric' })
  @Field(() => Int)
  quantity!: number;

  @Column({ type: 'boolean' })
  @Field(() => Boolean)
  completed!: boolean;

  // Realacion (n:1) con List
  // list!: List;

  // Relación (n:1) con Item
  // item!: Item;
}
