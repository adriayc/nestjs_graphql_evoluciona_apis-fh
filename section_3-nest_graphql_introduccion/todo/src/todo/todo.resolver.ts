import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { TodoService } from './todo.service';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput, UpdateTodoInput, StatusArgs } from './dto';

@Resolver(() => Todo) // El resolver trabajara con Todo
export class TodoResolver {
  constructor(private readonly todoServices: TodoService) {}

  @Query(() => [Todo], { name: 'todos' })
  findAll(@Args() statusArgs: StatusArgs): Todo[] {
    return this.todoServices.findAll(statusArgs);
  }

  @Query(() => Todo, { name: 'todo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.todoServices.findOne(id);
  }

  @Mutation(() => Todo, { name: 'createTodo' })
  create(@Args('createTodoInput') createTodoInput: CreateTodoInput): Todo {
    return this.todoServices.create(createTodoInput);
  }

  @Mutation(() => Todo, { name: 'updateTodo' })
  update(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput): Todo {
    return this.todoServices.update(updateTodoInput.id, updateTodoInput);
  }

  @Mutation(() => Boolean, { name: 'deleteTodo' })
  delete(@Args('id', { type: () => Int }) id: number): boolean {
    return this.todoServices.delete(id);
  }

  // Agregation
  @Query(() => Int, { name: 'totalTodos' })
  totalTodos(): number {
    return this.todoServices.totalTodos; // Call get method
  }

  @Query(() => Int, { name: 'completedTodos' })
  completedTodos(): number {
    return this.todoServices.completedTodos; // Call get method
  }

  @Query(() => Int, { name: 'pendingTodos' })
  pendingTodos(): number {
    return this.todoServices.pendingTodos; // Call get method
  }
}
