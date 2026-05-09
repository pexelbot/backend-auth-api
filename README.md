# backend-auth-api
Node.js JWT Auth API with Express, bcrypt and middleware. User registration, login and protected routes.

# Node.js Authentication API (JWT)

This is a simple backend authentication service built with Node.js and Express.js.  
It demonstrates how user authentication works using JWT tokens and password hashing.

## 🚀 Features

- User registration
- User login
- Password hashing with bcrypt
- JWT authentication
- Protected routes using middleware
- Basic in-memory user storage

## 🧠 Purpose

This project was created to learn and demonstrate:
- Authentication flow in backend systems
- JWT-based authorization
- Middleware usage in Express.js
- Secure password handling

## ⚙️ Tech Stack

- Node.js
- Express.js
- JSON Web Token (JWT)
- bcrypt

## 📡 API Endpoints

POST /api/auth/register – create new user  
POST /api/auth/login – authenticate user and receive token  
GET  /api/auth/me – protected route (requires JWT)

## 🔐 Authorization

Protected routes require token in header:

Authorization: Bearer <token>

## ▶️ Run project

npm install  
node src/server.js
