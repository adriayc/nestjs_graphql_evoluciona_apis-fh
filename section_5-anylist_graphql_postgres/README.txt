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

    - Eliminar dependencias
        + Prettier (Formateo de código) [optinal]
            $ yarn remove prettier eslint-config-prettier eslint-plugin-prettier

* VSCode
    - Shortcuts
        + Reload Window (CTRL + SHIFT + P > Search:... 'Developer: Reload Window')
