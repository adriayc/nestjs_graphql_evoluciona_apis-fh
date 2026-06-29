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
        * Crear un nuevo resource (no test file)
            $ nest g res seed --no-spec
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
                                quantityUnits
                                user {
                                    id
                                    fullName
                                    email
                                }
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
                    > Variables
                        {
                            "createItemInput": {
                                "name": "Donas de D&D ",
                                "quantityUnits": "unit"
                            }
                        }
                    Click 'CreateItem'
                - items (Query)
                    > Operation
                        query Items {
                            items {
                                id
                                name
                                quantityUnits
                                user {
                                    id
                                    fullName
                                    email
                                }
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
                    Click 'Items'
                - item (Query)
                    > Operation
                        query Item($itemId: ID!) {
                            item(id: $itemId) {
                                id
                                name
                                quantityUnits
                                user {
                                    id
                                    fullName
                                    email
                                }
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
                    > Variables
                        {
                            "itemId": "{{ITEM_ID}}"
                        }
                    Click 'Item'
                - updateItem (Mutation)
                    > Operation
                        mutation Mutation($updateItemInput: UpdateItemInput!) {
                            updateItem(updateItemInput: $updateItemInput) {
                                id
                                name
                                quantityUnits
                                user {
                                    id
                                    fullName
                                    email
                                }
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
                    > Variables
                        {
                            "updateItemInput": {
                                "id": "2cf82556-11de-42ed-83dd-47198eb94334",
                                "quantityUnits": "porcion"
                            }
                        }
                    Click 'UpdateItem'
                - removeItem (Mutation)
                    > Operation
                        mutation RemoveItem($removeItemId: ID!) {
                            removeItem(id: $removeItemId) {
                                id
                                name
                                quantityUnits
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
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
                - revalidate
                    > Operation
                        query Revalidate {
                            revalidate {
                                token
                                user {
                                    id,
                                    fullName
                                    isActive
                                    roles
                                }
                            }
                        }
                    > Headers
                        > Click 'Set shared headers'
                            > Connection settings
                                > Shared headers
                                  header key: Authorization       value: Bearer {{USER_TOKEN}}
                            Click 'Save'
            * User
                - users (Query)
                    > Operation
                        query Users($roles: [String!]) {
                            users(roles: $roles) {
                                id
                                fullName
                                email
                                isActive
                                roles
                                lastUpdateBy {
                                    id
                                    fullName
                                }
                            }
                        }

                        query Users {
                            users {
                                id
                                fullName
                                email
                                isActive
                                roles
                                itemCount # ResolveField con info del padre
                                items {
                                    id
                                    name
                                }
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
                    > Variables
                        {
                            "roles": "admin"
                        }

                        {
                            "roles": ["admin","user"]
                        }
                    CLick 'Users'
                - user (Query)
                    > Operation
                        query User($userId: ID!) {
                            user(id: $userId) {
                                id
                                fullName
                                email
                                isActive
                                lastUpdateBy {
                                    id
                                    fullName
                                }
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
                    > Variables
                        {
                            "userId": "27c495bf-8f8b-4e89-bbde-294af8347983"
                        }
                    Click 'User'
                - userBlock (Mutation)
                    > Operation
                        mutation BlockUser($blockUserId: ID!) {
                            blockUser(id: $blockUserId) {
                                id
                                fullName
                                email
                                isActive
                                lastUpdateBy {
                                    id
                                    fullName
                                }
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
                    > Variables
                        {
                            "blockUserId": "{{USER_ID}"
                        }
                    Click 'BlockUser'
                - updateUser
                    > Operation
                        mutation UpdateUser($updateUserInput: UpdateUserInput!) {
                            updateUser(updateUserInput: $updateUserInput) {
                                id
                                fullName
                                email
                                roles
                                isActive
                                lastUpdateBy {
                                fullName, email
                                }
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
                    > Variables
                        {
                            "updateUserInput": {
                                "id": "8e73f75f-3e23-47ea-9794-52466e39913e",
                                // "fullName": "Adriano Ayala Updated",
                                // "email": "adriano@mail.com",
                                "isActive": true,
                                // "roles": "admin", // overwrites the roles
                                "roles": ["admin", "superUser"]
                            }
                        }
                    Click "UpdateUser"
            * SEED
                - executeSeed (Mutation)
                    > Operation
                        mutation Mutation {
                            executeSeed
                        }
                    Click 'ExecuteSeed'

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
