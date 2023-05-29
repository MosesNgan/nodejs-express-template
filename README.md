# nodejs-express-template

`nodejs-express-template` is a template project for building Node.js and Express.js applications. It provides a solid foundation and integrates popular technologies, libraries, and frameworks to streamline your development process.

## ❯ Table of Contents

- [Features](#❯-features)
- [Recommendations](#❯-recommendations)
- [Commands](#❯-commands)

## ❯ Features

These features are implemented in this template with specific libraries or frameworks:

- **[Framework](#framework)**: Built on Express.js, a fast and minimalist web application framework for Node.js.
- **[Package Manager](#package-manager)**: Utilizes Yarn as the package manager for efficient dependency management.
- **[API Documentation](#api-documentation)**: Integrates OpenAPI to generate comprehensive API documentation for your endpoints.
- **[Linting](#linting)**: Configured with ESLint to enforce code quality and maintain consistent coding standards.
- **[Code Formatting](#code-formatting)**: Enforces consistent code style using Prettier.
- **[Docker](#docker)**: Includes Docker configuration to containerize your application for easy deployment and scalability.
- **[Cache](#cache)**: Integrates Redis as a caching solution to optimize performance and reduce database load.
- **[Testing](#testing)**: Utilizes Jest as the testing framework to ensure code quality and reliability through unit and integration tests.
- **[Environment Variables](#environment-variables)**: Configures environment variables using `dotenv` for easy management of configuration settings.
- **[Git Hooks with Husky](#git-hooks-with-husky)**: Uses Husky to set up Git hooks for automated tasks and pre-commit linting.

## ❯ Recommendations

These sections provide guidelines and recommendations that are not directly implemented in the code, but we provide guidance on how to approach them:

- **[Architecture](#architecture)**: Choose from different architectural patterns such as MVC, MVVC, CQRS, or Microservices based on your project requirements.
- **[Project Structure](#project-structure)**: Set up a well-organized project structure that promotes scalability and maintainability.
- **[Database and ORM](#database-and-orm)**: Connect to your preferred database (SQL or NoSQL) and integrate with an ORM for efficient data handling.
- **[Authentication](#authentication)**: Implement authentication in your application using strategies like JWT, session-based authentication, or OAuth.
- **[Authorization](#authorization)**: Implement authorization mechanisms such as role-based access control (RBAC) or attribute-based access control (ABAC) to manage user permissions and access levels.
- **[Custom Error](#custom-error)**: Implement a standardized error handling system to provide meaningful and consistent error responses.
- **[Logging](#logging)**: Configure logging using libraries like Winston or Bunyan to capture relevant application logs.
- **[Security](#security)**: Enhance the security of your application using Helmet middleware to set various HTTP headers.
- **[Validation](#validation)**: Utilize a validation library like Zod to validate and sanitize user input.
- **[Email Service](#email-service)**: Integrate an email service to send transactional emails or notifications.
- **[Message Queue](#message-queue)**: Set up a message queue or message broker for asynchronous communication.
- **[Notification Service](#notification-service)**: Implement a notification service to send real-time notifications to users.
- **[Runtime](#runtime)**: Choose the appropriate runtime environment for your application (e.g., Node.js, ES).
- **[Hosting](#hosting)**: Consider hosting options like Kubernetes (K8s), Amazon ECS, or Google App Engine based on your infrastructure needs.
- **[Infrastructure as Code (IAC)](#infrastructure-as-code-iac)**: Include IaC code, Helm charts, or Kubernetes (K8s) configuration if applicable.

## ❯ Commands

### Install

- Install all dependencies with `yarn install`

### Tests

- Run tests using `yarn test`

### Running in dev mode

- Run `yarn dev` to start nodemon with ts-node
- The server address will be displayed to you as `http://0.0.0.0:3000` (or `PORT` you specified in `.env`)

### Building the project and run it

- Run `yarn build` to generated all JavaScript files from the TypeScript sources
- To start the builded app located in `dist` use `yarn start`

## Framework

[Specify the framework used in the boilerplate]

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash

PORT=3000
```

## Architecture

### MVC

### MVVC

### CQRS

### Microservices

## Project Structure

[Describe the project structure and directory layout]

## API Documentation

[Explain how to generate and access API documentation]

## Package Manager

[Specify the package manager used in the project (e.g., Yarn)]

## Database and ORM

[Specify the type of database used (SQL or NoSQL) and any relevant details]

[Specify the ORM used for database integration]

## Linting

Linting is done using [ESLint](https://eslint.org/), a popular JavaScript linter.

In this app, ESLint is configured to follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) with some modifications. The TypeScript support is provided by the `airbnb-typescript` configuration.

To modify the ESLint configuration, update the `.eslintrc.json` file.

To prevent a certain file or directory from being linted, add it to the `.eslintignore` file.

To run the ESLint analysis and check for code quality issues, use the following command:

```shell
yarn lint
```

This command will analyze all TypeScript files in the src directory and its subdirectories.

To automatically fix ESLint errors and apply code formatting, use the following command:

```shell
yarn lint:fix
```

This will attempt to fix any fixable errors and enforce the ESLint rules in your codebase.

Note that ESLint is also integrated with Prettier to ensure consistent code style. Prettier rules are applied alongside ESLint rules.

## Code Formatting

Code formatting is done using [Prettier](https://prettier.io/), an opinionated code formatter.

In this app, Prettier is configured with the following settings in the `.prettierrc` file:

```json
{
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "all",
  "arrowParens": "always",
  "endOfLine": "auto"
}
```

To format your codebase, run the following command:

```shell
yarn format
```

This will automatically format all the files in your project according to the Prettier configuration.

To customize the Prettier configuration, you can modify the `.prettierrc` file.

To ignore certain files or directories from being formatted by Prettier, add them to the `.prettierignore` file.

Feel free to adjust the content or formatting according to your preferences.

## Git Hooks with Husky

This template utilizes [Husky](https://typicode.github.io/husky/) to set up Git hooks for automated tasks and pre-commit linting. Git hooks are scripts that are automatically executed before or after specific Git events, such as committing code.

In this template, Husky is configured using the `husky` object in the `package.json` file. It allows you to define Git hooks as scripts directly in the `package.json`, making it convenient to manage and version control your Git hooks along with your project configuration.

Husky is set up to run ESLint for code linting before each commit by configuring the `pre-commit` hook. This ensures that your code meets the defined coding standards and maintains consistent code quality.

To modify the Husky configuration or add new hooks, update the `husky` object in the `package.json` file. You can define scripts for different Git hooks and specify the tasks or commands to be executed.

For more information on Husky and how to customize Git hooks using the `husky` object, refer to the [Husky documentation](https://typicode.github.io/husky/).

## Docker

### Install Docker

Before you start, make sure you have a recent version of [Docker](https://docs.docker.com/engine/installation/) installed.

### Build Docker image

```shell
docker build -t <your-image-name> .
```

### Run Docker image in container and map port

The port which runs your application inside Docker container is either configured as `PORT` property in your `.env` configuration file or passed to Docker container via environment variable `PORT`. Default port is `3000`.

#### Run image in detached mode

```shell
docker run -d -p <port-on-host>:<port-inside-docker-container> <your-image-name>
```

#### Run image in foreground mode

```shell
docker run -i -t -p <port-on-host>:<port-inside-docker-container> <your-image-name>
```

### Stop Docker container

#### Detached mode

```shell
docker stop <container-id>
```

You can get a list of all running Docker container and its ids by following command

```shell
docker images
```

#### Foreground mode

Go to console and press <kbd>Ctrl</kbd> + <kbd>C</kbd>

## Cache

[Specify the cache mechanism used (e.g., Redis)]

## Authentication

[Describe the authentication mechanism used]

## Authorization

[Describe the authorization mechanism used]

## Testing

[Specify the testing framework used (e.g., Jest, Mocha) and how to run tests]

## Custom Error

[Explain how custom errors are handled]

## Logging

[Describe the logging setup and configuration]

## Security

[Explain the security measures taken (e.g., Helmet)]

## Validation

[Specify the validation library used (e.g., Zod)]

## Email Service

[Explain the integration of the email service]

## Message Queue

[Describe the message queue or message broker used]

## Notification Service

[Explain the integration of the notification service]

## Runtime

[Specify the runtime environment used (e.g., Node.js, ES, bun)]

## Hosting

[Describe the recommended hosting environment (e.g., K8s, ECS, AppEngine)]

## Infrastructure as Code (IAC)

[Specify the infrastructure-as-code (IaC) code used, if applicable]

[Explain the Helm chart configuration, if applicable]

[Describe any Kubernetes (K8s) code used, if applicable]
