import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

@InputType()
export class UpdateTodoInput {
  @Field(() => Int)
  @IsInt()
  @Min(1)
  id!: number;

  @Field(() => String, { description: 'Description of TODO', nullable: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @IsOptional()
  description?: string;

  @Field(() => Boolean, { description: 'Done of TODO', nullable: true })
  @IsBoolean()
  @IsOptional()
  done?: boolean;
}
