# Quiz App REST API

The Quiz App REST API is a Node.js web application built with Express, TypeScript, and a PostgreSQL database. It provides endpoints for managing quizzes, questions, and user scores.

# Table of Contents

- [Features](#features)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Credits](#credits)
- [License](#license)

## Features

The Quiz App REST API comes with the following features:

- Endpoints for managing quizzes, questions, and user scores.
- Data stored in a PostgreSQL database.
- Authentication using JSON Web Tokens (JWT).
- Input validation using Joi.
- Error handling and logging using Winston.

## Installation

To install the Quiz App REST API, clone this repository and run the following commands:

```sh
npm install
npm run build
```

You will also need to create a .env file with the following variables:

```makefile
NODE_ENV=development
PORT=3000
PGHOST=your_host_here
PGPORT=your_port_here
PGDATABASE=your_database_here
PGUSER=your_username_here
PGPASSWORD=your_password_here
JWT_SECRET=your_secret_key_here
```

## API Documentation

API documentation is available at the following URL when the application is running:

```
http://localhost:3000/v1/docs/
```

## Credits

The Quiz App REST API was developed by [Kevin Rukundo](https://github.com/rukundo-kevin).

## License

The Quiz App REST API is licensed under the [MIT License](https://opensource.org/license/mit/).
