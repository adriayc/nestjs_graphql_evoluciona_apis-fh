import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { HelloWorldModule } from './hello-world/hello-world.module';

@Module({
  imports: [
    // GraphQL settigs
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false, // Deshabilita el playground
      plugins: [
        // Add the Apollo Studio Sandbox landing page plugin
        ApolloServerPluginLandingPageLocalDefault(),
      ],
    }),
    // Modules
    HelloWorldModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
