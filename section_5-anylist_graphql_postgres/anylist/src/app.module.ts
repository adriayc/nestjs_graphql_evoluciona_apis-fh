import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloDriver,
  // , ApolloDriverConfig
} from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // Config setup (enviroments)
    ConfigModule.forRoot(),
    // GraphQL setup (síncrono)
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    //   playground: false,
    //   plugins: [
    //     // Apolo sandbox (studio) setup
    //     ApolloServerPluginLandingPageLocalDefault(),
    //   ],
    // }),
    // GraphQL setup (asíncrono)
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [
        /* Importar módulos */
        AuthModule,
      ],
      inject: [
        /* Inyectar servicios */
        JwtService,
      ],
      useFactory: (jwtService: JwtService) => ({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        playground: false,
        plugins: [
          // Apolo sandbox (studio) setup
          ApolloServerPluginLandingPageLocalDefault(),
        ],
        context({ req }) {
          // Bloquea el GQLSchema - Comentado!!!
          // const token = req.headers.authorization?.replace('Bearer ', '');
          // if (!token) throw new Error('Token needed');
          // const payload = jwtService.decode(token);
          // if (!payload) throw new Error('Token not valid');
        },
      }),
    }),
    // TypeORM (Postgres)
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT!,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      synchronize: true,
      autoLoadEntities: true,
    }),
    // Modules
    ItemsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
