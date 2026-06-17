import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

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

  @Query(() => Int, {
    name: 'randomFromZeroTo',
    description: 'Return random number from zero to argument TO (default 6)',
  })
  getRandomFromZeroTo(
    @Args('to', { type: () => Int, nullable: true }) to: number = 6, // Argumento 'to' (para graphql), por defecto es 6 y opcional (nullable: true)
  ): number {
    return Math.floor(Math.random() * to); // Genera un número entre 0 y valor de TO (no incluye el valor TO)
  }
}
