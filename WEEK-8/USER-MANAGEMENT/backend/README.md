# User Management Backend

Backend API for the Week 8 User Management app. It is built with Express.js, MongoDB, and Mongoose.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS

## Project Structure

- `server.js` - creates the Express app, enables CORS, parses JSON, connects MongoDB, mounts routes, and handles errors.
- `APIs/UserAPI.js` - user CRUD routes.
- `models/UserModel.js` - Mongoose user schema and model.
- `.env` - local environment variables.

## Environment Variables

Create a `.env` file in the backend folder:

```env
PORT=4000
DB_URL=your_mongodb_connection_string
```

## Run Locally

```bash
npm install
npm start
```

Server runs on the port provided in `.env`.

Example:

```text
http://localhost:4000
```

## API Routes

Base route:

```text
/user-api
```

### Create User

```http
POST /user-api/users
```

Request body:

```json
{
  "name": "Anusha",
  "email": "anusha@example.com",
  "dateOfBirth": "2002-01-01",
  "mobileNumber": 9876543210
}
```

### Read Active Users

```http
GET /user-api/users
```

Returns users where `status` is `true`.

### Read User by ID

```http
GET /user-api/users/:id
```

Returns one active user by MongoDB ObjectId.

### Soft Delete User

```http
DELETE /user-api/users/:id
```

Does not permanently delete the user. It changes `status` to `false`.

### Activate User

```http
PATCH /user-api/users/:id
```

Changes `status` back to `true`.

## User Model

The user schema contains:

- `name` - required string.
- `email` - required unique string.
- `dateOfBirth` - required date.
- `mobileNumber` - number.
- `status` - boolean used for soft delete, default `true`.
- `createdAt` and `updatedAt` - added automatically by Mongoose timestamps.

## Error Handling

The backend handles:

- Mongoose validation errors.
- Invalid MongoDB ObjectId errors.
- Duplicate email errors.
- Generic server errors.
