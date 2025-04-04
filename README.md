# uTask - Task Management Application

## Description

uTask is a modern web application designed for task management, allowing users to create, organize, and track their tasks efficiently. The application supports adding priorities to tasks and provides an intuitive user experience. It is built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

_(Backend development is complete. Frontend development is pending.)_

## Technologies

This project utilizes the following technologies:

- **Backend:**
  - [Node.js](https://nodejs.org/) - JavaScript runtime environment
  - [Express.js](https://expressjs.com/) - Minimalist and flexible Node.js web application framework
  - [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
  - [MongoDB Atlas](https://www.mongodb.com/atlas/database) - Scalable NoSQL cloud database (or local MongoDB)
  - [jsonwebtoken](https://jwt.io/) (JWT) - For creating and verifying secure authentication tokens
  - [bcryptjs](https://www.npmjs.com/package/bcryptjs) - For secure password hashing
  - [cookie-parser](https://www.npmjs.com/package/cookie-parser) - Middleware for parsing cookies (used for JWT auth)
  - [cors](https://www.npmjs.com/package/cors) - Middleware for enabling Cross-Origin Resource Sharing
  - [dotenv](https://www.npmjs.com/package/dotenv) - For loading environment variables from a `.env` file
- **Frontend (Planned):**
  - [React.js](https://react.dev/) - JavaScript library for building user interfaces
  - [Zustand](https://zustand-drehmoment.vercel.app/) - Small, fast, and scalable state management library
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid styling
  - [Shadcn UI](https://ui.shadcn.com/) - Collection of beautiful and accessible React UI components built using Tailwind CSS
- **Development Tools:**
  - [nodemon](https://nodemon.io/) - Utility that monitors for changes and automatically restarts the server
  - [cross-env](https://www.npmjs.com/package/cross-env) - Utility to set environment variables across different platforms
  - [Git](https://git-scm.com/) - Version control system

## Features (Backend Complete)

- **Secure User Authentication:**
  - User Registration (`/api/v1/auth/signup`)
  - User Login (`/api/v1/auth/signin`)
  - User Logout (`/api/v1/auth/signout`)
  - JWT (JSON Web Tokens) issued via secure `HttpOnly` cookies.
  - Password hashing using `bcryptjs`.
- **User Profile Management:**
  - Get current user information (`GET /api/v1/users/me`)
  - Update current user information (name, email, password) (`PATCH /api/v1/users/me`)
- **Task Management (CRUD):**
  - Create new tasks (`POST /api/v1/tasks`) linked to the logged-in user.
  - Get all tasks for the logged-in user (`GET /api/v1/tasks`).
  - Get a specific task by ID (`GET /api/v1/tasks/:id`).
  - Update a task (title, description, priority, done status) (`PUT /api/v1/tasks/:id`).
  - Delete a task (`DELETE /api/v1/tasks/:id`).
- **Robust API:**
  - Centralized error handling middleware.
  - Configurable CORS policy to restrict access.
  - Input validation via Mongoose schemas.

## Getting Started / Installation (Backend)

Follow these instructions to set up and run the backend server locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended) and npm (or yarn) installed
- [Git](https://git-scm.com/) installed
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) account **OR** a local MongoDB installation. You will need a MongoDB connection string.

### Setup Steps

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/MilosS994/uTask.git
    cd uTask
    ```

2.  **Navigate to the backend directory:**

    ```bash
    cd server
    ```

    _(Assuming your backend code is in a 'server' subfolder. Adjust if necessary.)_

3.  **Install dependencies:**

    ```bash
    npm install
    ```

    _(Or `yarn install` if you use Yarn)_

4.  **Set up Environment Variables:**

    - Create a `.env` file in the `server` directory: `touch .env`
    - Copy the contents of `.env.example` (see below) into your newly created `.env` file.
    - Fill in the required values in your `.env` file, especially `MONGO_URI` and `JWT_SECRET`.

    **`.env.example` content (Create this file in `server` directory if it doesn't exist):**

    ```dotenv
    # Server Configuration
    PORT=5500

    # Database Configuration
    # Replace with your actual MongoDB connection string (local or Atlas)
    MONGO_URI=mongodb://localhost:27017/uTaskDB_dev

    # JWT Configuration
    # Generate a strong, random secret for JWT signing (e.g., using openssl rand -hex 32)
    JWT_SECRET=your_super_strong_jwt_secret_key_here
    JWT_EXPIRES_IN=1d # Token expiration (e.g., 1d = 1 day, 7d = 7 days, 1h = 1 hour)

    # CORS Configuration
    # The origin of your frontend application (for local development)
    ORIGIN=http://localhost:5173

    # Node Environment (set by scripts, but good default)
    NODE_ENV=development
    ```

    **Important:**

    - Never commit your actual `.env` file to Git. Ensure `.env` is listed in your `.gitignore` file.
    - Generate a secure, random string for `JWT_SECRET`.

5.  **Run the Backend Server:**
    - **Development Mode (with automatic restarts):**
      ```bash
      npm run dev
      ```
      _(This uses `nodemon` and sets `NODE_ENV=development` via `cross-env`)_
    - **Production Mode:**
      ```bash
      npm start
      ```
      _(This uses `node` and sets `NODE_ENV=production` via `cross-env`)_

The backend server should now be running (typically on `http://localhost:5500` based on the example `.env`). You can test the API endpoints using tools like Postman or Insomnia.

## API Endpoints

_(A brief overview of the main routes. Consider creating more detailed API documentation later.)_

- **Auth Routes (Base: `/api/v1/auth`)**
  - `POST /signup` - Register a new user
  - `POST /signin` - Log in a user
  - `POST /signout` - Log out a user
- **User Routes (Base: `/api/v1/users`)**
  - `GET /me` - Get current user's profile
  - `PATCH /me` - Update current user's profile
- **Task Routes (Base: `/api/v1/tasks`)**
  - `POST /` - Create a new task
  - `GET /` - Get all tasks for the logged-in user
  - `GET /:id` - Get a specific task
  - `PUT /:id` - Update a specific task
  - `DELETE /:id` - Delete a specific task
