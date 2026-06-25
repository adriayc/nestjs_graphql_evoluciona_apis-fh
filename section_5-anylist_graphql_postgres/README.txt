ANYLIST (NestJS + GraphQL & PostgreSQL with TypeORM)

* Inicializar la app (NestJS + GraphQL)
    - Crear el proyecto
        $ nest new anylist
            > ? Which package manager would you ❤️  to use? yarn
        $ cd anylist
        $ yarn config set nodeLinker node-modules   // Configure the Linker (only yarn 4)
        $ yarn install
        $ yarn run start            // Run app (dev mode)
        $ yarn run start:dev        // Run app (dev and watch mode)

    - Ejecutar la DB
        $ docker compose up [-d]        // Crear la imagen y ejecutar el servicio (-d detached mode)

    - Instalar dependencias
        + GraphQL
            $ yarn add @nestjs/graphql @nestjs/apollo @apollo/server @as-integrations/express5 graphql
        + Configuration (Environments)
            $ yarn add @nestjs/config
        + TypeORM (Postgres)
            $ yarn add @nestjs/typeorm typeorm pg
        + Validator (Validación de la data)
            $ yarn add class-validator class-transformer
        + Bcrypt (Hash password)
            $ yarn add bcrypt
        + Passport and JWT (Authentication)
            $ yarn add @nestjs/passport passport
            $ yarn add @nestjs/jwt passport-jwt

    - Eliminar dependencias
        + Prettier (Formateo de código) [optinal]
            $ yarn remove prettier eslint-config-prettier eslint-plugin-prettier

    - Nest CLI
        + Crear un nuevo resource (no test file)
            $ nest g res items --no-spec
                > ? What transport layer do you use? GraphQL (code first)
                > ? Would you like to generate CRUD entry points? (Y/n) y
        * Crear un nuevo resource (no test file)
            $ nest g res users --no-spec
                > ? What transport layer do you use? GraphQL (code first)
                > ? Would you like to generate CRUD entry points? (Y/n) y
        * Crear un nuevo resource (no test file)
            $ nest g res auth --no-spec
                > ? What transport layer do you use? GraphQL (code first)
                > ? Would you like to generate CRUD entry points? (Y/n) n

    - Apollo Sandbox (Studio)
        + Request in GraphQL (Browser URL (SANDBOX): http://localhost:3000/graphql)
            * Item
                - createItem (Mutation)
                    > Operation
                        mutation CreateItem($createItemInput: CreateItemInput!) {
                            createItem(createItemInput: $createItemInput) {
                                id
                                name
                                quantity
                                quantityUnits
                            }
                        }
                    > Variables
                        {
                            "createItemInput": {
                                "name": "Pañales",
                                "quantity": 1
                            }
                        }

                        {
                            "createItemInput": {
                                "name": "Uvas",
                                "quantity": 2,
                                "quentityUnits": "lb"
                            }
                        }
                    Click 'CreateItem'
                - items (Query)
                    > Operation
                        query Items {
                            items {
                                id
                                name
                                quantity
                                quantityUnits
                            }
                        }
                    Click 'Items'
                - item (Query)
                    > Operation
                        query Item($itemId: ID!) {
                            item(id: $itemId) {
                                id
                                name
                                quantity
                                quantityUnits
                            }
                        }
                    > Variables
                        {
                            "itemId": "{{ITEM_ID}}"
                        }
                    Click 'Item'
                - updateItem (Mutation)
                    > Operation
                        mutation UpdateItem($updateItemInput: UpdateItemInput!) {
                            updateItem(updateItemInput: $updateItemInput) {
                                id
                                name
                                quantity
                                quantityUnits
                            }
                        }
                    > Variables
                        {
                            "updateItemInput": {
                                "id": "f76a3ac5-a67c-4639-adb9-8c6363837533",
                                "name": "Pañales Updated",
                                // "quantity": 2
                            }
                        }
                    Click 'UpdateItem'
                - removeItem (Mutation)
                    > Operation
                        mutation RemoveItem($removeItemId: ID!) {
                            removeItem(id: $removeItemId) {
                                id
                                name
                                quantity
                                quantityUnits
                            }
                        }
                    > Variables
                        {
                            "removeItemId": "{{ITEM_ID}}"
                        }
                    Click 'RemoveItem'
            * Auth
                - signup (Mutation)
                    > Operation
                        mutation Signup($signupInput: SignupInput!) {
                            signup(signupInput: $signupInput) {
                                token,
                                user {
                                id
                                email,
                                fullName,
                                isActive,
                                roles
                                }
                            }
                        }
                    > Variables
                        {
                            "signupInput": {
                                "fullName": "Adriano Ayala",
                                "email": "adriano@mail.com",
                                "password": "Secret123#"
                            }
                        }
                    Click 'Signup'
                - login (Mutation)
                    > Operation
                        mutation Login($loginInput: LoginInput!) {
                            login(loginInput: $loginInput) {
                                token,
                                user {
                                id,
                                fullName,
                                email,
                                isActive,
                                roles
                                }
                            }
                        }
                    > Variables
                        {
                            "loginInput": {
                                "email": "adriano@mail.com",
                                "password": "Secret123#"
                            }
                        }

    - Table Plus
        + Create new connection (Click '+' | 'New Connection')
            > Connection's name: Anylist
            > PostgreSQL
            > Database host/socket: localhost
            > Port: 5432
            > Database's user: postgres
            > Password: {{POSTGRES_PASSWORD}}
            > Database's name: {POSTGRES_DB}}
            Click 'Test' | 'Save' | 'Connect'


* VSCode
    - Shortcuts
        + Reload Window (CTRL + SHIFT + P > Search:... 'Developer: Reload Window')
