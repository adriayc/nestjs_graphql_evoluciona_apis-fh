NEST + GRAPHQL - INTRODUCCIÓN

* Inicializar la aplicación (NestJS + GraphQL)
    - Crear el proyecto
        $ nest new todo
            > ? Which package manager would you ❤️  to use? yarn
        $ yarn config set nodeLinker node-modules   // Configure the Linker (only yarn 4)
        $ yarn install
        $ yarn run start        // Run app
        $ yarn run start:dev    // Run app (watch mode)

    - Agregar dependecias
        - GraphQL (For Express and Apollo) [default]
            $ yarn add @nestjs/graphql @nestjs/apollo @apollo/server @as-integrations/express5 graphql

    - Eliminar dependencias
        + Prettier (Formateo de código) [optinal]
            $ yarn remove prettier eslint-config-prettier eslint-plugin-prettier

    - Nest CLI
        + Crear un nuevo module
            $ nest g mo helloWorld
        + Crear un nuevo GraphQL resolver (no test files)
            $ nest g r helloWorld --no-spec

    - GraphQL Clients
        + Browser (Funciona si el playgroud es habilitado)
            > Open URL: http://localhost:3000/graphql
                > Playground:
                    La palabra 'query' es opcional
                    query {
                        # helloWorld
                        hello: helloWorld
                        # hello2: helloWorld
                    }
                    or
                    {
                        helloWorld
                    }
                    -> Run: CTRL + ENTER
        + Altair GraphQL Client
        + Insomnia
        + Postman
        + Apollo Studio (GraphQL) [Recomendado!!!]
            > SANDBOX: http://localhost:3000/graphql
                > Operation
                    * helloWord
                        query Query {
                            --typename      // Indica el nombre del tipo de dato
                            helloWorld      // Indica el nombre del campo
                        }
                        Click 'Query'
                    * randomNumber (Podemos elimnar 'query Query' o modificar el nombre 'query ObtieneNuemerosRandom')
                        query Query {
                            randomNumber
                            rdn1: randomNumber
                            rdn2: randomNumber
                        }
                        Click 'Query'


* VSCode
    - Shortcuts
        + Reload Window (CTRL + SHIFT + P > Search:... 'Developer: Reload Window')
