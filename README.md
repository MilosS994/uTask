# 📌 uTask – Task Management Application

uTask is a modern full-stack task management web app built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It allows users to register, log in, and manage their personal tasks through a clean and responsive interface.

This repository contains both the **backend** and **frontend** code for local development and testing.

> ✅ **Deployment is not active – project is available for local use only.**

---

## ⚙️ How to Run the Project Locally

Follow these steps to clone the project and run it on your machine.

### 1. Clone the repository

```bash
git clone https://github.com/MilosS994/uTask.git
cd uTask
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Setup environmental variables

#### PORT=5500

#### MONGO_URI=your_mongo_uri_here

#### JWT_SECRET=your_jwt_secret

#### JWT_EXPIRES_IN=as_you_wish

#### ORIGIN=http://localhost:5173

#### NODE_ENV=development

### 4. Start the backend server

```bash
npm run dev
```

### 5. Install frontend dependencies

```bash
cd client
npm install
```

### 4. Start the frontend app

```bash
npm run dev
```

## 🔐 Features Overview

### ✅ Authentication

- JWT-based authentication (stored in HttpOnly cookies)
- Secure sign in and sign out
- Password hashing using `bcryptjs`

### ✅ Task Management

- Create, update, and delete tasks
- All tasks are scoped per authenticated user
- Support for task **priority** and **status** updates

### ✅ User Profile

- Retrieve current user information
- Update user profile details (name, email, password)
- Protected routes using middleware

## Project structure

```bash
server/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
└── server.js

client/
├── src/
│   ├── assets/
│   ├── components/
│   ├── lib/
│   ├── pages/
│   ├── services/
│   ├── store/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
└── index.html
```
