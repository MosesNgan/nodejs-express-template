# Express TypeScript Template

This is a template repository for building Express.js with TypeScript applications. There are two main sections.
  1. The first part consists of pre-implemented features and recommended technologies/packages that we propose for every Express project.
  2. The second part offers recommendations (but no implementation) on various topics that may differ from project to project.

Check the [table of contents](#-table-of-contents) for more details.


The goal is to enable our software engineers to **focus more on the business domain** rather than spending excessive time on setting up the development environment.

## Getting Started

To create a new project based on this template, follow these steps:

1. **Use this template**: Click on the "Use this template" button at the top of the repository to create a new repository based on this template.

2. **Clone the new repository**: Clone the newly created repository to your local machine using the following command:
   ```shell
   git clone <new-repository-url>
   ```
3. **Create `.env` file**: Rename `.env.example` to `.env`. They come with these default values:

   ```shell
   PORT=3000
   REDIS_URL=redis://localhost:6379
   ```

4. **Install project dependencies**: Install all project dependencies using the following command:
   ```shell
   yarn install
   ```

You are now ready to start developing your project!

### Development

Start the development server in watch mode using the following command:

```shell
yarn dev
```

The server address will be displayed as http://0.0.0.0:3000 (or the PORT you specified in the `.env` file).

### Build and Production

When you are ready to deploy your application, build the project using the following command:

```shell
yarn build
```

Start the built app in production mode using the following command:

```shell
yarn start
```

### Tests

- Run tests using `yarn test`

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
  - [Validation and Custom Error Handling](#validation-and-custom-error-handling)
  - [Logging](#logging)
  - [Security](#security)
  - [Email Service](#email-service)
  - [Message Queue](#message-queue)
  - [Notification Service](#notification-service)
  - [Runtime](#runtime)
  - [Hosting](#hosting)
  - [Infrastructure as Code (IAC)](#infrastructure-as-code-iac)
- [Feedback and Suggestions](#feedback-and-suggestions)

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

In this app, Prettier is configured in the `.prettierrc` file.

To format your codebase, run the following command:

```shell
yarn format
```

To ignore certain files or directories from being formatted by Prettier, add them to the `.prettierignore` file.

We also utilize `EditorConfig`, which helps configure and enforce coding conventions across various editors and IDEs.

#### EditorConfig Setup

1. Install an EditorConfig plugin or extension for your preferred editor/IDE. The following are some popular options:

   - Visual Studio Code: [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
   - IntelliJ IDEA: [EditorConfig plugin](https://plugins.jetbrains.com/plugin/7294-editorconfig)
   - Sublime Text: [EditorConfig](https://packagecontrol.io/packages/EditorConfig)
   - Atom: [EditorConfig](https://atom.io/packages/editorconfig)

2. Once installed, ensure that your editor/IDE automatically detects and applies the project's `.editorconfig` settings.

### Git Hooks with Husky

This project utilizes [Husky](https://typicode.github.io/husky/) to set up Git hooks for automated tasks and pre-commit linting. Git hooks are scripts that are automatically executed before or after specific Git events, such as committing code.

In this project, Husky is configured using the `.husky` directory. It allows you to define Git hooks as scripts directly in the `.husky` directory, making it convenient to manage and version control your Git hooks along with your project configuration.

Husky is set up to run ESLint for code linting before each commit by configuring the `pre-commit` hook. This ensures that your code meets the defined coding standards and maintains consistent code quality.

To modify the Husky configuration or add new hooks, update the scripts in the `.husky` directory. You can define scripts for different Git hooks and specify the tasks or commands to be executed.

For more information on Husky and how to customize Git hooks using the `.husky` directory, refer to the [Husky documentation](https://typicode.github.io/husky/).

### Environment Variables

Configures environment variables using `dotenv` for easy management of configuration settings.

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

The MVC (Model-View-Controller) architectural pattern separates an application into three main components: the model, the view, and the controller. The model represents the data and business logic, the view represents the presentation layer, and the controller handles the communication between the model and the view.

To implement MVC in your project, you can organize your codebase as follows:

- `src/models/`: Contains the model classes and interfaces.
- `src/views/`: Contains the view templates or components.
- `src/controllers/`: Contains the controller logic that handles requests, manipulates data from models, and renders views.

#### MVVC

The MVVC (Model-View-ViewModel-Controller) architectural pattern is an extension of the MVC pattern. It introduces a ViewModel layer that acts as an intermediary between the model and the view. The ViewModel encapsulates the presentation logic and provides data binding capabilities between the model and the view.

To implement MVVC in your project, you can organize your codebase as follows:

- `src/models/`: Contains the model classes and interfaces.
- `src/views/`: Contains the view templates or components.
- `src/viewmodels/`: Contains the ViewModel classes that encapsulate the presentation logic and handle data transformations.
- `src/controllers/`: Contains the controller logic that handles requests, communicates with the ViewModel, and renders views.

#### CQRS

The CQRS (Command Query Responsibility Segregation) architectural pattern separates the read and write operations in an application. It uses separate models and mechanisms for querying data (reads) and modifying data (writes).

To implement CQRS in your project, you can organize your codebase as follows:

- `src/queries/`: Contains the query handlers that handle read operations and retrieve data.
- `src/commands/`: Contains the command handlers that handle write operations and modify data.
- `src/models/`: Contains the model classes and interfaces shared between queries and commands.

#### Microservices

The microservices architecture is an architectural style where an application is composed of loosely coupled, independently deployable services. Each service represents a specific business capability and can be developed, deployed, and scaled independently.

To implement a microservices architecture in your project, you can organize your codebase by service boundaries:

- `service1/`: Contains the code for Service 1, including its own models, controllers, and routes.
- `service2/`: Contains the code for Service 2, including its own models, controllers, and routes.
- ...

Each service can have its own folder structure based on the chosen architectural pattern, such as MVC, MVVC, or CQRS.

## ❯ Recommendations

These sections provide guidelines and recommendations that are not directly implemented in the code, but we provide guidance on how to approach them:

### Project Structure

Set up a well-organized project structure that promotes scalability and maintainability. Here's an example of a common project structure:

- `src/`: Contains the source code of your Express TypeScript application.
  - `controllers/`: Contains the controller logic that handles requests and communicates with services.
  - `routes/`: Contains the route definitions that map HTTP endpoints to controllers.
  - `models/`: Contains the model classes or interfaces that represent your data structures.
  - `services/`: Contains the business logic and interacts with models or external services.
  - `middlewares/`: Contains custom middleware functions for handling specific request processing tasks.
  - `config/`: Contains configuration files for environment-specific settings.
  - `utils/`: Contains utility functions or modules.
  - `app.ts`: The entry point of your application where you set up the Express server and middleware.
  - `index.ts`: The main file that starts the server and listens for incoming requests.

Feel free to adjust and customize this structure based on your project's needs and preferences.

### Database and ORM

Connect to your preferred database (SQL or NoSQL) and integrate with an ORM for efficient data handling. Here are a few popular options:

- **[PostgreSQL](https://www.postgresql.org/)**: A powerful open-source SQL database. You can integrate it with ORMs like [TypeORM](https://typeorm.io/) or [Sequelize](https://sequelize.org/).

- **[MongoDB](https://www.mongodb.com/)**: A flexible and scalable NoSQL database. You can use an ORM like [Mongoose](https://mongoosejs.com/) to interact with MongoDB.

- **[MySQL](https://www.mysql.com/)**: An open-source relational database. ORMs like [TypeORM](https://typeorm.io/) or [Sequelize](https://sequelize.org/) support MySQL.

- **[SQLite](https://www.sqlite.org/)**: A self-contained, serverless, and file-based SQL database. ORMs like [TypeORM](https://typeorm.io/) and [Sequelize](https://sequelize.org/) can work with SQLite.

Choose the database and ORM that best suits your project's requirements, considering factors such as data structure, scalability, performance, and ease of use.

Please note that the above suggestions are just examples, and there are many other databases and ORMs available. Choose the one that aligns with your project's needs and your familiarity with the technology.

Remember to install the required dependencies for your chosen database and ORM and configure the database connection details in your project.

### Authentication

Implement authentication in your application using strategies like JWT (JSON Web Tokens), session-based authentication, or OAuth. Here are a few popular choices:

- **[Passport.js](http://www.passportjs.org/)**: A versatile authentication middleware for Node.js that supports various authentication strategies, including JWT, session-based authentication, OAuth, and more.

- **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**: A library for generating and validating JWTs in Node.js applications.

- **[express-session](https://www.npmjs.com/package/express-session)**: A middleware for managing session-based authentication in Express applications.

Choose the authentication strategy that best suits your project's requirements, considering factors such as security, scalability, and ease of implementation.

### Authorization

Implement authorization mechanisms such as role-based access control (RBAC) or attribute-based access control (ABAC) to manage user permissions and access levels. Here are a few popular choices:

- **[CASL](https://casl.js.org/)**: A library for defining and managing user permissions using an attribute-based access control approach.

- **[Access Control](https://www.npmjs.com/package/accesscontrol)**: A library for implementing role-based access control (RBAC) in Node.js applications.

- **[Node ACL](https://www.npmjs.com/package/acl)**: A flexible and powerful library for managing access control lists (ACL) in Node.js applications.

Choose the authorization mechanism that aligns with your project's requirements and provides the necessary flexibility and control over user permissions.

Please note that the above suggestions are just examples, and there are many other libraries and frameworks available for authentication and authorization in Node.js. Choose the ones that best suit your project's needs and your familiarity with the technology.

### Validation and Custom Error Handling

Implement a robust input validation system and a standardized error handling system to provide meaningful and consistent error responses.

#### Validation

- Utilize a validation library like [Joi](https://github.com/sideway/joi), [Yup](https://github.com/jquense/yup), or [Zod](https://github.com/colinhacks/zod).
- Define validation schemas or rules to validate user input.
- Check for correct data types, required fields, and other constraints.
- Sanitize user input to prevent common security issues like XSS attacks.

#### Custom Error Handling

- Implement a standardized error handling system.
- Create custom error classes or use libraries like [Boom](https://github.com/hapijs/boom).
- Generate structured and informative error responses.
- Include specific error codes, messages, and additional data in error responses.
- Centralize error handling logic for consistent error reporting.

By combining validation and custom error handling, you can ensure that incoming data is validated and sanitized correctly and that any errors are handled and reported in a consistent and user-friendly manner.

### Logging

Configure logging to capture relevant application logs. Here are a few popular choices:

- **[Winston](https://github.com/winstonjs/winston)**: A versatile logging library for Node.js that supports various logging transports, log levels, and formatting options.

- **[Bunyan](https://github.com/trentm/node-bunyan)**: A simple and fast logging library with a focus on structured logging.

- **[Pino](https://github.com/pinojs/pino)**: An extremely fast and lightweight logger for Node.js that provides a well-defined JSON output.

Choose the logging library that best fits your project's requirements, considering factors such as performance, ease of use, and the ability to integrate with other tools or services for log aggregation and analysis.

Please note that the above suggestions are just examples, and there are many other logging libraries available for Node.js. Choose the one that aligns with your project's needs and your familiarity with the technology.

### Security

Enhance the security of your application using [Helmet](https://helmetjs.github.io/) middleware to set various HTTP headers. Helmet helps protect your application against common security vulnerabilities by configuring HTTP headers appropriately. It provides middleware functions that can be easily integrated into your Express application to set headers such as Content Security Policy (CSP), Strict-Transport-Security (HSTS), XSS Protection, and more. By enabling and configuring these headers, you can strengthen the security of your application and protect it from potential attacks.

### Email Service

Integrate an email service to send transactional emails or notifications. There are several popular email service providers that offer APIs for sending emails reliably and efficiently. Some commonly used providers include:

- **[SendGrid](https://sendgrid.com/)**: A cloud-based email service that allows you to send emails at scale and provides features such as email templates, tracking, and analytics.

- **[Mailgun](https://www.mailgun.com/)**: An email automation service that offers a powerful API for sending, receiving, and tracking emails.

- **SMTP services**: You can also integrate your application with a standard SMTP (Simple Mail Transfer Protocol) server or a third-party SMTP service like Gmail, Outlook, or Amazon SES.

To integrate an email service into your application, you will typically need to sign up for an account with the chosen provider, obtain the necessary credentials (API keys or SMTP credentials), and use their provided libraries or APIs to send emails from your application. You can usually find documentation and code examples on the email service provider's website to help you get started with the integration.

Remember to handle email sending asynchronously to prevent blocking the main application flow and to handle any potential errors or failures gracefully.

### Message Queue

Set up a message queue or message broker for asynchronous communication. Asynchronous communication is essential for decoupling components and handling background tasks efficiently. Here are a few popular message queue systems:

- **[RabbitMQ](https://www.rabbitmq.com/)**: A robust and highly reliable message broker that supports multiple messaging patterns such as publish/subscribe and request/reply.

- **[Apache Kafka](https://kafka.apache.org/)**: A distributed streaming platform that provides a fast, scalable, and fault-tolerant messaging system.

- **Redis Pub/Sub**: Redis, an in-memory data store, also provides a simple publish/subscribe messaging mechanism for lightweight message queuing.

Choose a message queue system that fits your project's requirements in terms of scalability, reliability, and ease of integration. Configure your application to use the message queue for asynchronous processing of tasks and communication between different components.

### Notification Service

Implement a notification service to send real-time notifications to users. Real-time notifications can enhance the user experience and keep users informed about important updates or events. Here are a few approaches for implementing a notification service:

- **WebSocket**: Use WebSocket technology to establish a persistent connection between the client and the server, enabling real-time bidirectional communication for instant notifications.

- **Push Notifications**: Utilize push notification services like Firebase Cloud Messaging (FCM) or Apple Push Notification Service (APNS) to send notifications to mobile devices even when the application is not actively running.

- **Email/SMS**: Integrate with an email or SMS service provider to send notifications via email or SMS messages.

Choose the appropriate notification approach based on your project's requirements and the platforms/devices you are targeting.

### Runtime

Choose the appropriate runtime environment for your application, such as Node.js or a specific version of ECMAScript (ES). Consider the following factors:

- **[Node.js](https://nodejs.org/)**: Use Node.js if you need to build server-side applications with JavaScript. Node.js provides an event-driven, non-blocking I/O model that makes it suitable for building scalable and high-performance applications.

- **ES Version**: Choose the appropriate version of ECMAScript (ES) based on your target environment. Consider the features and compatibility with the runtime environment and the browsers or platforms your application will run on.

Selecting the right runtime environment ensures compatibility and performance for your application.

### Hosting

Consider hosting options like Kubernetes (K8s), Amazon ECS, or Google App Engine based on your infrastructure needs. The hosting environment you choose depends on factors such as scalability, ease of deployment, and management capabilities. Here are brief descriptions of the recommended hosting options:

- **[Kubernetes (K8s)](https://kubernetes.io/)**: A container orchestration platform that provides automated deployment, scaling, and management of containerized applications. It offers flexibility, scalability, and robustness for running your application in a distributed environment.

- **[Amazon ECS](https://aws.amazon.com/ecs/)**: A fully managed container orchestration service provided by Amazon Web Services (AWS). ECS allows you to run containerized applications on a scalable infrastructure without the need to manage the underlying infrastructure.

- **[Google App Engine](https://cloud.google.com/appengine)**: A fully managed serverless platform provided by Google Cloud Platform (GCP). App Engine allows you to focus on writing code without worrying about infrastructure management. It scales automatically to handle your application's traffic.

Choose the hosting environment that best fits your project's requirements in terms of scalability, management, and integration with your infrastructure.

### Infrastructure as Code (IAC)

Include IaC code, Helm charts, or Kubernetes (K8s) configuration if applicable. Infrastructure as Code (IaC) allows you to manage and provision your infrastructure using code, enabling version control, repeatability, and automated deployments. Here are some elements you may consider:

- **IaC Code**: If you are using a cloud provider like [AWS](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/), or [GCP](https://cloud.google.com/), consider including infrastructure provisioning code using tools like [Terraform](https://www.terraform.io/) or [AWS CloudFormation](https://aws.amazon.com/cloudformation/).

- **Helm Charts**: If you are deploying your application on Kubernetes, Helm charts provide a way to define, install, and manage applications within a Kubernetes cluster. Include the necessary Helm charts and values files in your repository for easier deployment and configuration.

- **Kubernetes (K8s) Configuration**: If you are deploying directly to a Kubernetes cluster, include the necessary Kubernetes manifests, such as Deployment, Service, and Ingress files, to define and configure your application's components within the cluster.

By including IaC code, Helm charts, or Kubernetes configuration, you enable infrastructure provisioning and deployment automation, making it easier to manage and scale your application.


## Feedback and Suggestions

If you have any ideas for improvements, feature requests, or general comments, we encourage you to use GitHub Issues to share your thoughts.

To submit feedback or suggestions:
1. Navigate to the [Issues](https://github.com/palo-it-hk/express-typescript-template/issues) tab of this repository.
2. Click on the "New Issue" button.
3. Provide a descriptive title for your feedback or suggestion.
4. Write a detailed description explaining your idea or comment. Feel free to include any relevant context or examples.
5. Click on the "Submit new issue" button once you have completed the issue.


Thank you for your participation and valuable input!
