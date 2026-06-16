# NEST + GRAPHQL: EVOLUCIONA TUS APIS

> **Instructor:** Fernando Herrera

## Instalaciones Necesarias

- [Visual Studio Code](https://code.visualstudio.com/)
- [Postman](https://www.postman.com/)

Opcional

- [Table Plus](https://tableplus.com/)
- [Git](https://git-scm.com/)

```sh
$ git config --global user.name "Tu nombre"
$ git config --global user.email "Tu correo"
```

- [Node.js](https://nodejs.org/en)

```sh
$ npm install --global yarn
```

- [Docker Desktop](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)

Decargar imagenes:

```docker
$ docker pull mongo:5.0.0
$ docker pull postgres:14.3
```

Extensiones de VSCode

- [Activitus Bar](https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night)

Tema e icons de VSCode

- [Tokyo Night](https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

Cambiar íconos de Angular por iconos de Nest > Abrir: settings.json | Open User Settings (JSON)

```json
"material-icon-theme.activeIconPack": "nest",
```

Instalaciones adicionales

- [Past JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [TypeScript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [Better Dockerfile Syntax](https://marketplace.visualstudio.com/items?itemName=jeff-hykin.better-dockerfile-syntax)

## GraphQL

GraphQL es un lenguaje de consulta (query language) y un entorno de ejecución (runtime) para APIs que permite a los clientes solicitar exactamente los datos que necesitan ni más ni menos. Fue desarrollado por Meta Platforms (antes Facebook) y liverado como proyecto de código abierto en 2015.

## NestJS

NestJS es un framework para aplicaciones del lado del servidor (back-end) construido sobre Node.js y escrito principalmente en TypeScript. Su objetivo es facilitar la creación de aplicaciones escalables, mantenibles y bien estructurados.

Los enfoques para definir el squema GraphQL en una aplicación de NestJS son:

- **Code First**
- **Schema First**

### Code First

En Code First, el esquema GraphQL se genera automáticamente a partir de clases y decoradores de TypeScript.

### Schema First

En Schema First, primero se define el esquema GraphQL manulamente en archivos `.graphql` o `.gql`, y después se implementa el código que lo respalda.
