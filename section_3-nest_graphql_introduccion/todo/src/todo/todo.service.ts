import { Injectable, NotFoundException } from '@nestjs/common';

import { Todo } from './entity/todo.entity';
import { CreateTodoInput, UpdateTodoInput, StatusArgs } from './dto';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 1, description: 'Piedra del Alma', done: false },
    { id: 2, description: 'Piedra del Espacio', done: true },
    { id: 3, description: 'Piedra del Poder', done: false },
    { id: 4, description: 'Piedra del Tiempo', done: false },
  ];

  // Getter
  get totalTodos(): number {
    return this.todos.length;
  }

  get completedTodos(): number {
    return this.todos.filter((todo) => todo.done === true).length;
  }

  get pendingTodos(): number {
    return this.todos.filter((todo) => todo.done === false).length;
  }

  findAll(statusArgs: StatusArgs): Todo[] {
    const { status } = statusArgs;

    if (status !== undefined)
      return this.todos.filter((todo) => todo.done == status);

    return this.todos;
  }

  findOne(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) throw new NotFoundException(`TODO with id #${id} not found`);

    return todo;
  }

  create(createTodoInput: CreateTodoInput): Todo {
    const todo = new Todo();
    todo.description = createTodoInput.description;
    todo.id = Math.max(...this.todos.map((todo) => todo.id), 0) + 1; // Obtener el ID máximo y incrementar en 1

    this.todos.push(todo);

    return todo;
  }

  update(id: number, updateTodoInput: UpdateTodoInput): Todo {
    const { description, done } = updateTodoInput;

    const updateTodo = this.findOne(id);
    if (description) updateTodo.description = description;
    if (done !== undefined) updateTodo.done = done;

    this.todos = this.todos.map((dbTodo) => {
      return dbTodo.id == id ? updateTodo : dbTodo;
    });

    return updateTodo;
  }

  delete(id: number): boolean {
    this.findOne(id);

    this.todos = this.todos.filter((dbTodo) => dbTodo.id !== id);

    return true;
  }
}
