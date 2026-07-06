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

    - Instalar dependencias
        + Validation (Validate data)
            $ yarn add class-validator class-transformer

    - Eliminar dependencias
        + Prettier (Formato de código) [optinal]
            $ yarn remove prettier eslint-config-prettier eslint-plugin-prettier

    - NestJS CLI
        + Crear un nuevo resource (sin arcchivos de test)
            $ nest g res todo --no-spec
                > ? What transport layer do you use? REST API
                > ? Would you like to generate CRUD entry points? (Y/n) y

    - Postman
        + Create Workspace > Blank workspace | Click 'Next'
            > Name: Ax2CDev
            > Select workspace type: Internal
            Click 'Create'
        + Create New Collection > Blank collection
            > Name: nestjs-graphql-foundation
        + HTTP Requests
            * Create TODO
                > GET: http://localhost:3000/todo                           Click 'Send'
                    > Body > raw | JSON
                        {
                            "description": "Piedra del Mente"
                        }
            * Get TODO
                > GET: http://localhost:3000/todo                           Click 'Send'
            * Get Single TODO
                > GET: http://localhost:3000/todo/{{TODO_ID}}               Click 'Send'
            * Update TODO
                > UPDATE: http://localhost:3000/todo/{{TODO_ID}}            Click 'Send'
                    > Body > raw | JSON
                        {
                            "description": "Piedra del Mente Updated",
                            "done": true
                        }
            * Delete TODO
                > DELETE: http://localhost:3000/todo/{{TODO_ID}}            Click 'Send'

* VSCode
    - Shortcuts
        + Reload Window (CTRL + SHIFT + P > Search:... 'Developer: Reload Window')
