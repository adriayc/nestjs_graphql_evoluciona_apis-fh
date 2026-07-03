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
        * Crear un nuevo module
            $ nest g mo common
        * Crear un nuevo resource (no test file)
            $ nest g res lists --no-spec
                > ? What transport layer do you use? GraphQL (code first)
                > ? Would you like to generate CRUD entry points? (Y/n) y
        * Crear un nuevo resource (no test file)
            $ nest g res listItem --no-spec
                > ? What transport layer do you use? GraphQL (code first)
                > ? Would you like to generate CRUD entry points? (Y/n) y

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

                    Pagination and Filter
                    > Operation
                        query Items($limit: Int, $offset: Int) {
                            items(limit: $limit, offset: $offset) {
                                name
                                id
                                quantityUnits
                                itemCount
                                items {
                                    id
                                    quantity
                                    completed
                                    item {
                                        id
                                        name
                                    }
                                }
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
                    > Variables
                    {
                        "limit": 5,     # Default 10
                        "offset": 0     # Default 0
                        "search": "rice"
                    }
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

                    Pagination and Filter
                    > Operation
                        query Users($offset: Int, $limit: Int, $itemsLimit2: Int, $itemsOffset2: Int, $listsLimit2: Int, $listsOffset2: Int, $search: String, $listsSearch2: String) {
                            users(offset: $offset, limit: $limit) {
                                id
                                fullName
                                email
                                itemCount
                                items(limit: $itemsLimit2, offset: $itemsOffset2, search: $search) {
                                    id
                                    name
                                }
                                listCount
                                lists(limit: $listsLimit2, offset: $listsOffset2, search: $listsSearch2) {
                                    id
                                    name
                                }
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
                    > Variables
                        {
                            "offset": 0,
                            "limit": 10,
                            "itemsLimit2": 3,
                            "itemsOffset2": 0,
                            // "search": "rice",
                            "listsLimit2": 3,
                            "listsOffset2": 0,
                            // "listsSearch2": "list #1",
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

                    Pagination and Search
                    > Operation
                        query Query($userId: ID!, $limit: Int, $offset: Int, $search: String) {
                            user(id: $userId) {
                                id
                                fullName
                                email
                                items(limit: $limit, offset: $offset, search: $search) {
                                    id
                                    name
                                }
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
                    > Variables
                    {
                        "userId": "{{USER_ID}",
                        "limit": 5,
                        "offset": 0,
                        "search": "rice"
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
            * List
                - createList (Mutation)
                    > Operation:
                        mutation Mutation($createListInput: CreateListInput!) {
                            createList(createListInput: $createListInput) {
                                id
                                name
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
                    > Variables
                        {
                            "createListInput": {
                                "name": "List #12"
                            }
                        }
                    Click 'Mutation'
                - lists (query)
                    > Operation
                        query Query($limit: Int, $offset: Int, $search: String) {
                            lists(limit: $limit, offset: $offset, search: $search) {
                                id
                                name
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
                    > Variables
                        {
                            "limit": 10,
                            "offset": 0,
                            "search": "list #1"
                        }
                    Click 'Query'
                - list (query)
                    > Operation
                        query List($listId: ID!) {
                            list(id: $listId) {
                                id
                                name
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
                    > Variables
                        {
                            "listId": "3eb51617-e81b-4f58-9cee-be914f75391f"
                        }
                    Click 'Query'
                - updateList (Mutation)
                    > Operation:
                        mutation Mutation($updateListInput: UpdateListInput!) {
                            updateList(updateListInput: $updateListInput) {
                                id
                                name
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
                    > Variables
                        {
                            "updateListInput": {
                                "id": "{{LIST_ID}}",
                                "name": "First List Updated"
                            }
                        }
                    Click 'Mutation'
                - deleteList (Mutation)
                    > Operation
                        mutation Mutation($removeListId: ID!) {
                            removeList(id: $removeListId) {
                                id
                                name
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
                    > Variables
                        {
                            "removeListId": "{{LIST_ID}}"
                        }
                    Click 'Mutation'
            * ListItem
                - createListItem (Mutation)
                    > Operation
                        mutation Mutation($createListItemInput: CreateListItemInput!) {
                            createListItem(createListItemInput: $createListItemInput) {
                                id
                                quantity
                                completed
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
                    > Variables
                        {
                            "createListItemInput": {
                                "itemId": "{{ITEM_ID}}",
                                "listId": "{{LIST_ID}",
                                "quantity": 10
                            }
                        }
                    Click 'Mutation'
                - listItem (Query)
                    > Operation
                        query Query($listItemId: ID!) {
                            listItem(id: $listItemId) {
                                id
                                quantity
                                completed
                                list {
                                    id
                                    name
                                    itemCount
                                }
                                item {
                                    id
                                    name
                                    quantityUnits
                                }
                            }
                        }
                    > Headers
                        [x] Authorization   Bearer {{USER_TOKEN}}
                    > Variables
                        {
                            "listItemId": "{{LISTITEM_ID}}"
                        }
                    Click 'Query'

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
