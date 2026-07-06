import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

import { List } from 'src/lists/entities/list.entity';
import { Item } from 'src/items/entities/item.entity';

@Entity({ name: 'listItems' })
@Unique('listItem-item', ['list', 'item']) // Constrain - crea una restricción única de DB (Evita tener registros duplicados)
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
  @ManyToOne(() => List, (list) => list.listItem, { lazy: true })
  @Field(() => List)
  list!: List;

  // Relación (n:1) con Item
  @ManyToOne(() => Item, (item) => item.listItem, { lazy: true })
  @Field(() => Item)
  item!: Item;
}
