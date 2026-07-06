import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MinLength, IsEmail } from 'class-validator';

@InputType()
export class CreateUserInput {
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
