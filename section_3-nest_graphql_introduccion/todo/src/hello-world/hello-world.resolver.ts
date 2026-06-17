import { Float, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, {
    description: 'Retorna un Hola Mundo GraphQL!', // Descripción
    name: 'hello', // Nombre
  }) // Tipo de retorno (String)
  helloWorld(): string {
    return 'Hola Mundo GraphQL!';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }
}
