import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType() // Objeto personalizado
export class Todo {
  @Field(() => Int)
  id!: number;

  //   @Field() // Nest y GraphQL asigna el tipo
  @Field(() => String)
  description!: string;

  @Field(() => Boolean)
  done: boolean = false;
}
