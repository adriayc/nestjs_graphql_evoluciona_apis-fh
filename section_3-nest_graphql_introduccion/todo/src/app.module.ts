import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { HelloWorldModule } from './hello-world/hello-world.module';

@Module({
  imports: [
    // GraphQL settigs
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // playground: false, // Deshabilita el playground
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    // Modules
    HelloWorldModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
