import {
  Field,
  // Float,
  ID,
  ObjectType,
} from '@nestjs/graphql';
import {
  Column,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from 'src/users/entities/user.entity';
import { ListItem } from 'src/list-item/entities/list-item.entity';

@Entity({ name: 'items' }) // Entity
@ObjectType() // GraphQL
export class Item {
  @PrimaryGeneratedColumn('uuid') // Entity
  @Field(() => ID) // GraphQL
  id!: string;

  @Column()
  @Field(() => String)
  name!: string;

  // @Column()
  // @Field(() => Float)
  // quantity!: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  quantityUnits?: string; // g, ml, ks, tsp

  // store

  // Relacion (n:1) con User
  @ManyToOne(() => User, (user) => user.items, { nullable: false, lazy: true }) // lazy carga la info de la relacion
  @Index('userId-index') // Agrear un index
  @Field(() => User)
  user!: User;

  // Relación (1:n) con ListItem
  @OneToMany(() => ListItem, (listItem) => listItem.item, { lazy: true })
  @Field(() => [ListItem])
  listItem!: ListItem[];
}
