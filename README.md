# nodejs-express-template

`nodejs-express-template` is a template project for building Node.js and Express.js applications. It provides a solid foundation and integrates popular technologies, libraries, and frameworks to streamline your development process.

## ❯ Getting Started

[Instruction to quickly start a new project with this template]

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

## ❯ Table of Contents

- [Features](#-features)
  - [Framework](#framework)
  - [Package Manager](#package-manager)
  - [Linting](#linting)
  - [Code Formatting](#code-formatting)
  - [Git Hooks with Husky](#git-hooks-with-husky)
  - [Environment Variables](#environment-variables)
  - [Docker](#docker)
  - [Docker Compose](#docker-compose)
  - [Cache](#cache)
  - [Testing](#testing)
  - [API Documentation](#api-documentation)
- [Recommendations](#-recommendations)
  - [Architecture](#architecture)
  - [Project Structure](#project-structure)
  - [Database and ORM](#database-and-orm)
  - [Authentication](#authentication)
  - [Authorization](#authorization)
  - [Custom Error](#custom-error)
  - [Logging](#logging)
  - [Security](#security)
  - [Validation](#validation)
  - [Email Service](#email-service)
  - [Message Queue](#message-queue)
  - [Notification Service](#notification-service)
  - [Runtime](#runtime)
  - [Hosting](#hosting)
  - [Infrastructure as Code (IAC)](#infrastructure-as-code-iac)

## ❯ Features

These features are implemented in this template with specific libraries or frameworks:

### Framework

Built on Express.js, a fast and minimalist web application framework for Node.js.

### Package Manager

Utilizes Yarn as the package manager for efficient dependency management.

### Linting

Configured with [ESLint](https://eslint.org/) to enforce code quality and maintain consistent coding standards.

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

### Code Formatting

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

### Git Hooks with Husky

This project utilizes [Husky](https://typicode.github.io/husky/) to set up Git hooks for automated tasks and pre-commit linting. Git hooks are scripts that are automatically executed before or after specific Git events, such as committing code.

In this project, Husky is configured using the `.husky` directory. It allows you to define Git hooks as scripts directly in the `.husky` directory, making it convenient to manage and version control your Git hooks along with your project configuration.

Husky is set up to run ESLint for code linting before each commit by configuring the `pre-commit` hook. This ensures that your code meets the defined coding standards and maintains consistent code quality.

To modify the Husky configuration or add new hooks, update the scripts in the `.husky` directory. You can define scripts for different Git hooks and specify the tasks or commands to be executed.

For more information on Husky and how to customize Git hooks using the `.husky` directory, refer to the [Husky documentation](https://typicode.github.io/husky/).

### Environment Variables

Configures environment variables using `dotenv` for easy management of configuration settings.

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
PORT=3000
REDIS_URL=redis://localhost:6379
```

### Docker

#### Install Docker

Before you start, make sure you have a recent version of [Docker](https://docs.docker.com/engine/installation/) installed.

#### Build Docker image

```shell
docker build -t <your-image-name> .
```

#### Run Docker image in container and map port

The port which runs your application inside Docker container is either configured as `PORT` property in your `.env` configuration file or passed to Docker container via environment variable `PORT`. Default port is `3000`.

##### Run image in detached mode

```shell
docker run -d -p <port-on-host>:<port-inside-docker-container> <your-image-name>
```

##### Run image in foreground mode

```shell
docker run -i -t -p <port-on-host>:<port-inside-docker-container> <your-image-name>
```

#### Stop Docker container

##### Detached mode

```shell
docker stop <container-id>
```

You can get a list of all running Docker container and its ids by following command

```shell
docker images
```

##### Foreground mode

Go to console and press <kbd>Ctrl</kbd> + <kbd>C</kbd>

### Docker Compose

To run the application and its dependencies using `docker-compose`, follow these steps:

#### Prerequisites

Make sure you have Docker and Docker Compose installed on your machine. You can download and install them from the [Docker website](https://www.docker.com/products/docker-desktop).

#### Starting the Application with Docker Compose

1. Open a terminal and navigate to the project root directory.

2. Run the following command to start the application and its dependencies:

   ```shell
   docker-compose up
   ```

   This command will build the Docker image, start the containers, and display the logs in the terminal.

3. Once the containers are up and running, you can access the application by opening your web browser and visiting http://localhost:3000.

4. You can also access the Redis server by connecting to redis://localhost:6379.

#### Stopping the Application

To stop the running containers gracefully, press <kbd>Ctrl</kbd> + <kbd>C</kbd> in the terminal where `docker-compose up` is running.

If you want to remove the containers and associated resources, you can run the following command:

```shel
docker-compose down
```

This command will stop and remove the containers, networks, and volumes created by Docker Compose.

Note: If you make any changes to the code or configuration files, you need to restart the containers using docker-compose up to apply the changes.

### Cache

This template integrates Redis as a caching solution to optimize performance and reduce database load.

To utilize the caching functionality, follow these steps:

1. Make sure you have Redis installed and running on your local machine. If you don't have it installed, you can download and install it from the [Redis website](https://redis.io/download).

2. Configure the Redis connection URL by updating the `.env` file. If your Redis instance is running on a different port or has a different URL, modify the `REDIS_URL` value accordingly.

3. In your application code, you can use the `getFromCache` and `setToCache` functions from the `src/services/cache` module to interact with the Redis cache.

   Here's an example of how to use these functions:

   ```typescript
   import { getFromCache, setToCache } from './services/cache';

   // Retrieve a value from the cache
   const value = await getFromCache('myKey');

   if (value) {
     console.log('Value from cache:', value);
   } else {
     // Set a value in the cache
     await setToCache('myKey', 'myValue');
     console.log('Value set in cache');
   }
   ```

This caching mechanism helps reduce the load on your database and improves the performance of your application by serving frequently accessed data from the cache.

Note: Remember to handle cache invalidation or expiration based on your application requirements.

### Testing

Utilizes Jest as the testing framework to ensure code quality and reliability through unit and integration tests.

### API Documentation

Integrates OpenAPI to generate comprehensive API documentation for your endpoints.

## ❯ Recommendations

These sections provide guidelines and recommendations that are not directly implemented in the code, but we provide guidance on how to approach them:

### Architecture

Choose from different architectural patterns such as MVC, MVVC, CQRS, or Microservices based on your project requirements.

#### MVC

#### MVVC

#### CQRS

#### Microservices

### Project Structure

Set up a well-organized project structure that promotes scalability and maintainability.

[Describe the project structure and directory layout]

### Database and ORM

Connect to your preferred database (SQL or NoSQL) and integrate with an ORM for efficient data handling.

[Specify the type of database used (SQL or NoSQL) and any relevant details]

[Specify the ORM used for database integration]

### Authentication

Implement authentication in your application using strategies like JWT, session-based authentication, or OAuth.

[Describe the authentication mechanism used]

### Authorization

Implement authorization mechanisms such as role-based access control (RBAC) or attribute-based access control (ABAC) to manage user permissions and access levels.

[Describe the authorization mechanism used]

### Custom Error

Implement a standardized error handling system to provide meaningful and consistent error responses.

[Explain how custom errors are handled]

### Logging

Configure logging using libraries like Winston or Bunyan to capture relevant application logs.

[Describe the logging setup and configuration]

### Security

Enhance the security of your application using Helmet middleware to set various HTTP headers.

[Explain the security measures taken (e.g., Helmet)]

### Validation

Utilize a validation library like Zod to validate and sanitize user input.

[Specify the validation library used (e.g., Zod)]

### Email Service

Integrate an email service to send transactional emails or notifications.

[Explain the integration of the email service]

### Message Queue

Set up a message queue or message broker for asynchronous communication.

[Describe the message queue or message broker used]

### Notification Service

Implement a notification service to send real-time notifications to users.

[Explain the integration of the notification service]

### Runtime

Choose the appropriate runtime environment for your application (e.g., Node.js, ES).

[Specify the runtime environment used (e.g., Node.js, ES, bun)]

### Hosting

Consider hosting options like Kubernetes (K8s), Amazon ECS, or Google App Engine based on your infrastructure needs.

[Describe the recommended hosting environment (e.g., K8s, ECS, AppEngine)]

### Infrastructure as Code (IAC)

Include IaC code, Helm charts, or Kubernetes (K8s) configuration if applicable.

[Specify the infrastructure-as-code (IaC) code used, if applicable]

[Explain the Helm chart configuration, if applicable]

[Describe any Kubernetes (K8s) code used, if applicable]
