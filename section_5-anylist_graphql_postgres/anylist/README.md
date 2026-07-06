# ANYLIST (NestJS + GraphQL & PostgreSQL with TypeORM)

## Setup

1. Clonar el repositorio.
2. Crear el archivo `.env` de las variables de entorno a partir de `.env.example`.
3. Levantar la database (docker) `docker compose up -d`.
4. Descargar y configurar todas las dependencias `yarn install` o `yarn`
5. Ejecutar o levantar la app `yarn run start:dev` o `yarn start:dev`.
6. Abrir en el navegador la URL (Apollo sandbox): http://localhost:3000/graphql

## NestJS

NestJS es un framework de código abierto para desarrollar aplicaciones del lado del servidor (backend) con Noje.js. Está escrito principalmente en TypeScript y está inspirado en la arquitectura de Angular, utilizando conceptos como módulos, inyección de dependencia, decoradores y servicios.

## GraphQL

GraphQL es un lenguaje de consulta para APIs y un entorno de ejecución que permite a los clientes solicitar exactamente los datos que necesitan, ni más ni menos. Fue desarrollado por Meta Platform para mejorar la eficiencia en el intercambio de datos entre apliciones cliente y servidores.

## PostgreSQL

PostgreSQL es un sistema de gestión de bases de datos relacional (RDBMS) de código abierto, conocido por su robustez, rendimiento y cumplimiento de estándares SQL. Se utiliza para almacenar, organizar y consultar datos de forma segura y eficiente en aplicaciones de todo tipo, desde pequeños proyecto hasta sistemas empresariales de gran escala.

## TypeORM

TypeORM es un ORM (Object-Relational Mapping) para TypeScript y JavaScrtip que permite interactuar con bases de datos realacionales utilizando clases y objetos en lugar de escribir consultas SQL manualmente.
