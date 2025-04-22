# 📌 uTask – Task Management Application

uTask is a modern full-stack task management web app built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). The app allows users to register, log in, and manage their personal tasks through an intuitive, responsive interface.

This repository contains the **backend** code with secure authentication, clean architecture, and RESTful API implementation, as well as the **frontend** which is developed using React.js, Zustand for state management, and Tailwind CSS with Shadcn UI for design.

> ✅ **Frontend development is complete, and the application is ready for use.**

---

## 🌐 Live Demo

🚀 [Live Application](#) – ... _(Will be added once the app is deployed)_

---

## 🛠️ Tech Stack

### 📌 Backend

- **Node.js** – JavaScript runtime
- **Express.js** – Web server framework
- **MongoDB Atlas** – Cloud NoSQL database
- **Mongoose** – ODM for MongoDB
- **jsonwebtoken (JWT)** – Authentication
- **bcryptjs** – Password hashing
- **cookie-parser** – Cookie handling
- **cors** – CORS support
- **dotenv** – Environment config

### 🧠 Frontend

- **React.js** – UI library
- **Zustand** – Lightweight state management
- **Tailwind CSS v4** – Utility-first CSS
- **Shadcn UI** – Headless UI components

### ⚙️ Development Tools

- **nodemon** – Auto-reload during dev
- **cross-env** – Cross-platform env support
- **Git & GitHub** – Version control

---

## 🔐 Authentication & Authorization

- ✅ JWT-based login system (via HttpOnly cookies)
- ✅ Password hashing with `bcryptjs`
- ✅ Secure user signup, login, and logout
- ✅ Middleware to protect routes

---

## 👤 User Features

- ✅ Register and login users with secure authentication
- ✅ Get current user data (`GET /me`)
- ✅ Update profile details (`PATCH /me`)
- ✅ Password updates with rehashing

---

## ✅ Task Management Features

- ✅ Create new tasks
- ✅ Retrieve all tasks (user-specific)
- ✅ Get a task by ID
- ✅ Update task content, status, and priority
- ✅ Delete tasks

All tasks are scoped per authenticated user.

---

## 📁 API Endpoints

Base path: `/api/v1`

### 🔑 Auth Routes

| Method | Endpoint        | Description             |
| ------ | --------------- | ----------------------- |
| POST   | `/auth/signup`  | Register a new user     |
| POST   | `/auth/signin`  | Login a user            |
| POST   | `/auth/signout` | Logout the current user |

### 👤 User Routes

| Method | Endpoint    | Description           |
| ------ | ----------- | --------------------- |
| GET    | `/users/me` | Get current user info |
| PATCH  | `/users/me` | Update user info      |

### 📋 Task Routes

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| POST   | `/tasks`     | Create a new task |
| GET    | `/tasks`     | Get all tasks     |
| GET    | `/tasks/:id` | Get task by ID    |
| PUT    | `/tasks/:id` | Update task by ID |
| DELETE | `/tasks/:id` | Delete task by ID |

> 🛡️ All `users` and `tasks` routes require JWT authentication via cookies.

---

## 📦 Project Structure

```bash
server/
│
├── config/        # ENV config
├── controllers/   # Auth, User, and Task logic
├── middleware/    # Auth middleware & error handler
├── models/        # Mongoose schemas (User, Task)
├── routes/        # API routes
└── server.js      # Entry point


client/
│
├── src/
│   ├── assets/         # Logo
│   ├── components/     # Reusable UI components (Buttons, Inputs, etc.) and app components (Modals, Forms)
│   ├── pages/          # Page components (Signup, Signin, Dashboard, etc.)
│   ├── store/          # Zustand state management store
│   ├── services/       # Axios
│   ├── App.jsx         # Main app component and routing setup
│   ├── main.jsx
│   ├── index.css       # Global styles
│
└── index.html          # Root HTML template
```
