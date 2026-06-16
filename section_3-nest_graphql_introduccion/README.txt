NEST + GRAPHQL - INTRODUCCIÓN

* Inicializar la aplicación (NestJS + GraphQL)
    - Crear el proyecto
        $ nest new todo
            > ? Which package manager would you ❤️  to use? yarn
        $ yarn config set nodeLinker node-modules   // Configure the Linker (only yarn 4)
        $ yarn install
        $ yarn run start        // Run app
        $ yarn run start:dev    // Run app (watch mode)

    - Eliminar dependencias
        + Prettier (Formateo de código) [optinal]
            $ yarn remove prettier eslint-config-prettier eslint-plugin-prettier

* VSCode
    - Shortcuts
        + Reload Window (CTRL + SHIFT + P > Search:... 'Developer: Reload Window')
