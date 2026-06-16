BREVE REFORZAMIENTO SOBRE NEST

* Inicializar la app
    - Instalar NestJS CLI
        $ npm i -g @nestjs/cli

    - Crear un nuevo proyecto
        $ nest new foundation
            > ? Which package manager would you ❤️  to use? yarn
        $ cd foundation
        $ yarn config set nodeLinker node-modules   // Configure the Linker (only yarn 4)
        $ yarn install
        $ yarn run start        // Run app
        $ yarn run start:dev    // Run app (watch mode)

    - Eliminar dependencias
        + Prettier (Formato de código) [optinal]
            $ yarn remove prettier eslint-config-prettier eslint-plugin-prettier

    - Postman
        + Create Workspace > Blank workspace | Click 'Next'
            > Name: Ax2CDev
            > Select workspace type: Internal
            Click 'Create'
        + Create New Collection > Blank collection
            > Name: nestjs-graphql-foundation
        + HTTP Requests
            * Hello World
                > GET: http://localhost:3000                                Click 'Send'

* VSCode
    - Shortcuts
        + Reload Window (CTRL + SHIFT + P > Search:... 'Developer: Reload Window')
