import { Field, ObjectType } from '@nestjs/graphql';

import { User } from 'src/users/entities/user.entity';

@ObjectType() // Define los datos que devuelve al cliente
export class AuthResponse {
  @Field(() => String)
  token!: string;

  @Field(() => User)
  user!: User;
}
