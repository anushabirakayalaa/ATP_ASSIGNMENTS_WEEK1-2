# User Management App

A simple MERN-style user management project for creating and viewing users. The backend provides REST APIs with Express, MongoDB, and Mongoose, while the frontend is built with React, Vite, React Router, and Tailwind CSS.

## Features

- Add a new user with name, email, date of birth, and mobile number.
- View all active users in a responsive card layout.
- Open a selected user's details.
- Soft delete support through a `status` field in MongoDB.
- Backend validation and error handling for user data.

## Project Structure

```text
USER-MANAGEMENT/
  backend/    Express API, MongoDB connection, and user model
  frontend/   React Vite user interface
  req.http    Sample API requests for testing the backend
```

## Tech Stack

- Frontend: React, Vite, React Router, Tailwind CSS, React Hook Form
- Backend: Node.js, Express.js, MongoDB, Mongoose
- API Testing: REST Client requests in `req.http`

## Backend Setup

```bash
cd backend
npm install
npm start
```

Create a `.env` file inside `backend` with:

```env
DB_URL=your_mongodb_connection_string
PORT=4000
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

- `POST /user-api/users` - create a user
- `GET /user-api/users` - get all active users
- `GET /user-api/users/:id` - get one active user by id
- `DELETE /user-api/users/:id` - soft delete a user
- `PATCH /user-api/users/:id` - activate a user
