import { Float, Int, Query, Resolver } from '@nestjs/graphql';

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
    description: 'Retornar un número random entre 0 y 10 (Sin incluir el 10)',
  })
  getRandomFromZeroTo(): number {
    return Math.floor(Math.random() * 10); // Genera un entre 0 y 10, y redondeo hacia abajo
  }
}
