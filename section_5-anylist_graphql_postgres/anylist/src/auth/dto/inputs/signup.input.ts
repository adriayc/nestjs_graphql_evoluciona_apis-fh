import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType() // Define los datos que recibe desde el cliente
export class SignupInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  fullName!: string;

  @Field(() => String)
  @IsString()
  @IsEmail()
  email!: string;

  @Field(() => String)
  @IsString()
  @MinLength(6)
  password!: string;
}
