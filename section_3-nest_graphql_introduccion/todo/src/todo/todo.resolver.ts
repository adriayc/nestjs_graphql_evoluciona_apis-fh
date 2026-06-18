import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { TodoService } from './todo.service';
import { Todo } from './entity/todo.entity';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoServices: TodoService) {}

  @Query(() => [Todo], { name: 'todos' })
  findAll(): Todo[] {
    return this.todoServices.findAll();
  }

  @Query(() => Todo, { name: 'todo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.todoServices.findOne(id);
  }

  create() {}

  update() {}

  delete() {}
}
