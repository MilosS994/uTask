# uTask - Task Management Application

## Description

uTask is a modern web application designed for efficient task management. Users can create, organize, prioritize, and track their tasks through an intuitive user interface. This project showcases a full-stack MERN application (MongoDB, Express.js, React.js, Node.js) with a focus on a clean backend architecture, secure authentication, and complete CRUD functionality for tasks.

_(Backend development is complete and documented here. Frontend development using React/Zustand/Tailwind/Shadcn UI is planned/in progress.)_

- **Live Application:** [Link to deployed application - Add when available]
- **Frontend Repository (if separate):** [Link to frontend repo - Add if applicable]

## Technologies Used

This project leverages a modern MERN stack and related technologies:

- **Backend:**
  - [Node.js](https://nodejs.org/) - JavaScript runtime environment
  - [Express.js](https://expressjs.com/) - Web application framework for Node.js
  - [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling
  - [MongoDB Atlas](https://www.mongodb.com/atlas/database) - Cloud database service (or local MongoDB)
  - [jsonwebtoken](https://jwt.io/) (JWT) - Secure authentication token generation and verification
  - [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Password hashing library
  - [cookie-parser](https://www.npmjs.com/package/cookie-parser) - Middleware for parsing cookies
  - [cors](https://www.npmjs.com/package/cors) - Middleware for enabling Cross-Origin Resource Sharing
  - [dotenv](https://www.npmjs.com/package/dotenv) - Environment variable management
- **Frontend (Planned/In Progress):**
  - [React.js](https://react.dev/) - UI library
  - [Zustand](https://zustand-drehmoment.vercel.app/) - State management library
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
  - [Shadcn UI](https://ui.shadcn.com/) - Reusable UI components
- **Development & General:**
  - [nodemon](https://nodemon.io/) - Automatic server restarts during development
  - [cross-env](https://www.npmjs.com/package/cross-env) - Cross-platform environment variable setting
  - [Git](https://git-scm.com/) & GitHub - Version control and hosting

## Core Features (Backend Implementation)

The backend provides a robust API supporting the following features:

- **Secure User Authentication:**
  - User registration with password hashing (`bcryptjs`).
  - User login verifying credentials and issuing JWTs.
  - User logout mechanism via cookie clearing.
  - JWTs are handled securely via `HttpOnly` cookies.
- **User Profile Management:**
  - Endpoint to retrieve the current logged-in user's profile information.
  - Endpoint to update the current user's profile details (name, email, password).
- **Complete Task CRUD Functionality:**
  - Endpoints for creating, reading (all and specific), updating, and deleting tasks.
  - Tasks are securely associated with the logged-in user.
  - Support for task priorities and completion status.
- **API Design & Structure:**
  - RESTful API design principles.
  - Organized project structure (models, routes, controllers, middleware).
  - Centralized error handling for consistent error responses.
  - Secure CORS policy configured via environment variables.
  - Data validation implemented using Mongoose schemas.

## API Endpoints Reference

The backend exposes the following API endpoints under the base path `/api/v1`:

- **Auth Routes (`/auth`)**
  - `POST /signup`
  - `POST /signin`
  - `POST /signout`
- **User Routes (`/users`)**
  - `GET /me`
  - `PATCH /me`
- **Task Routes (`/tasks`)**
  - `POST /`
  - `GET /`
  - `GET /:id`
  - `PUT /:id`
  - `DELETE /:id`

_(All User and Task routes require authentication via JWT cookie.)_
