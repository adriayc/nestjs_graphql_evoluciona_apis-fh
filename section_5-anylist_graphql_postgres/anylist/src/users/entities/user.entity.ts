import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Item } from 'src/items/entities/item.entity';
import { List } from 'src/lists/entities/list.entity';

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id!: string;

  @Column()
  @Field(() => String)
  fullName!: string;

  @Column({ unique: true })
  @Field(() => String)
  email!: string;

  @Column()
  // @Field(() => String)
  password!: string;

  @Column({
    type: 'text',
    array: true,
    default: ['user'],
  })
  @Field(() => [String])
  roles!: string[];

  @Column({
    type: 'boolean',
    default: true,
  })
  @Field(() => Boolean)
  isActive!: boolean;

  // TODO: relaciones

  @ManyToOne(() => User, (user) => user.lastUpdateBy, {
    nullable: true,
    // eager: true, // Muestra la relacion (Error, en la misma tabla)
    lazy: true, // Muestra la relacion
  })
  @JoinColumn({ name: 'lastUpdateBy' })
  @Field(() => User, { nullable: true })
  lastUpdateBy?: User;

  // Relacion (1:n) con Item
  @OneToMany(() => Item, (item) => item.user, { lazy: true }) // lazy - agregar los items (relaciones)
  // @Field(() => [Item]) // Deshabilitar el campo Item de GraphQL
  items!: Item[];

  // Relacion (1:n) con List
  @OneToMany(() => List, (list) => list.user)
  lists!: List[];
}
