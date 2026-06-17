import { Query, Resolver } from '@nestjs/graphql';

import { TodoService } from './todo.service';
import { Todo } from './entity/todo.entity';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoServices: TodoService) {}

  @Query(() => [Todo], { name: 'todos' })
  findAll(): Todo[] {
    return this.todoServices.findAll();
  }

  findOne() {
    return {};
  }

  create() {}

  update() {}

  delete() {}
}
