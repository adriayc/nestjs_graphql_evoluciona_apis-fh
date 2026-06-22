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

    - Eliminar dependencias
        + Prettier (Formateo de código) [optinal]
            $ yarn remove prettier eslint-config-prettier eslint-plugin-prettier

    - Nest CLI
        + Crear un nuevo resource (no test file)
            $ nest g res items --no-spec
                > ? What transport layer do you use? GraphQL (code first)
                > ? Would you like to generate CRUD entry points? (Y/n) y

    - Apollo Sandbox (Studio)
        + Request in GraphQL (Browser URL (SANDBOX): http://localhost:3000/graphql)

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
