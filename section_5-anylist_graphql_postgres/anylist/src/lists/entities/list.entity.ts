import { Field, ID, ObjectType } from '@nestjs/graphql';
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

@Entity({ name: 'lists' }) // Entity
@ObjectType() // GraphQL
export class List {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id!: string;

  @Column()
  @Field(() => String)
  name!: string;

  // Ralacion (n:1) con User
  @ManyToOne(() => User, (user) => user.lists, { nullable: false, lazy: true })
  @Index('userId-list-index')
  @Field(() => User)
  user!: User;

  // Relacion (1:n) con ListItem
  @OneToMany(() => ListItem, (listItem) => listItem.list, { lazy: true })
  // @Field(() => [ListItem])
  listItem!: ListItem[];
}
