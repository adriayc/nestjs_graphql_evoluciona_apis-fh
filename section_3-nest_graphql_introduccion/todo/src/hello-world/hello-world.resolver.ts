import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String) // Tipo de retorno (String)
  helloWorld(): string {
    return 'Hola Mundo GraphQL!';
  }
}
