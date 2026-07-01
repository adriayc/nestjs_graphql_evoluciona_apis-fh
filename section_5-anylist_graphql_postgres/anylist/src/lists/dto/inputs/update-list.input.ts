import { IsString, IsUUID } from 'class-validator';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

import { CreateListInput } from './create-list.input';

@InputType()
export class UpdateListInput extends PartialType(CreateListInput) {
  @Field(() => ID)
  @IsString()
  @IsUUID()
  id!: string;
}
