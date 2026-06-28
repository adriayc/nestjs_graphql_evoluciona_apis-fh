import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from 'src/users/entities/user.entity';

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
  @ManyToOne(() => User, (user) => user.items)
  @Field(() => User)
  user!: User;
}
