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
        - Validator (Validación de la data)
            $ yarn add class-validator class-transformer

    - Eliminar dependencias
        + Prettier (Formateo de código) [optinal]
            $ yarn remove prettier eslint-config-prettier eslint-plugin-prettier

    - Nest CLI
        + Crear un nuevo module
            $ nest g mo helloWorld
        + Crear un nuevo GraphQL resolver (no test files)
            $ nest g r helloWorld --no-spec

        + Crear un nuevo module
            $ nest g mo todo
        + Crear un nuevo GraphQL resolver (no test files)
            $ nest g r todo --no-spec
        + Crear un nuevo service (no test files)
            $ nest g s todo --no-spec

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
                    * TEST
                        - helloWord
                            query Query {
                                --typename      // Indica el nombre del tipo de dato
                                helloWorld      // Indica el nombre del campo
                            }
                            Click 'Query'
                        - randomNumber (Podemos elimnar 'query Query' o modificar el nombre 'query ObtieneNuemerosRandom')
                            query Query {
                                randomNumber
                                rdn1: randomNumber
                                rdn2: randomNumber
                            }
                            Click 'Query'
                        - randomFromZeroTo
                            query Query {
                                randomFromZeroTo            // Default 6, genera un número entre 0 y 6 (sin incluir el 6)
                                rdn5: randomFromZeroTo(5)   // Genera un número entre 0 y 5 (sin incluir el 5)
                            }
                            Click 'Query'
                    * TODO
                        - todos
                            query Todos {
                                todos {
                                    id
                                    description
                                    done
                                }
                            }
                            Or
                            query Todos {
                                tareas: todos { // Renombrar a 'tareas'
                                    id
                                    description
                                    done
                                }
                            }
                            Click 'Query'
                        - todo
                            query Todo($todoId: Int!) {
                                todo(id: $todoId) {
                                    # done
                                    description
                                    id
                                }
                            }
                            Variables
                            {
                                "todoId": 2
                            }
                            Or
                            {
                                todo1: todo(id: 1) {
                                    # done
                                    description
                                    id
                                }
                                todo2: todo(id: 2) {
                                    # done
                                    description
                                    id
                                }
                            }
                            With 'Fragments'
                            {
                                todo1: todo(id: 1) {
                                    ...fields
                                }
                                todo2: todo(id: 2) {
                                    ...fields
                                }
                                todo3: todo(id: 3) {
                                    ...fields
                                }
                            }
                            # Fragments
                            fragment fields on Todo {
                                id
                                description
                                done
                            }
                            Click 'Query'
                        - createTodo
                            mutation Mutation($createTodoInput: CreateTodoInput!) {
                                createTodo(createTodoInput: $createTodoInput) {
                                    id
                                    description
                                    done
                                }
                            }
                            Variables
                            {
                                "createTodoInput": {
                                    "description": "Piedra del Tiempo"
                                }
                            }
                            Or
                            mutation {
                                createTodo(createTodoInput: {
                                    description: "Piedra del Tiempo"
                                }) {
                                    id
                                    description
                                    done
                                }
                            }
                            Click 'Query'
                        - updateTodo
                            mutation UpdateTodo($updateTodoInput: UpdateTodoInput!) {
                                updateTodo(updateTodoInput: $updateTodoInput) {
                                    id
                                    description
                                    done
                                }
                            }
                            Variables
                            {
                                "updateTodoInput": {
                                    "id": 1,
                                    "description": "Piedra del Alma Updated",
                                    "done": true
                                }
                            }
                            Click 'Query'

* VSCode
    - Shortcuts
        + Reload Window (CTRL + SHIFT + P > Search:... 'Developer: Reload Window')
