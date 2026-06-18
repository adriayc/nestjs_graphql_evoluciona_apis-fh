import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { TodoService } from './todo.service';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput } from './dto/inputs/create-todo.input';

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

  @Mutation(() => Todo, { name: 'createTodo' })
  create(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    console.log({ createTodoInput });
    return null;
  }

  update() {}

  delete() {}
}
