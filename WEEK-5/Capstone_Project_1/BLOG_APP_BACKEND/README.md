# Blog App Backend

Backend API for the Blog Application capstone project. It is built with Express.js, MongoDB, Mongoose, JWT authentication, cookies, role-based access, image upload, and Cloudinary.

## Tech Stack

- Node.js and Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- cookie-parser for auth cookies
- multer for profile image upload
- Cloudinary for image storage
- CORS for frontend access

## Project Structure

- `server.js` - Express app setup, CORS, middleware, API mounting, database connection, and error handling.
- `APIS/UserAPI.js` - user registration, reading active articles, reading article by id, and adding comments.
- `APIS/AuthorAPI.js` - author registration, creating articles, reading own articles, updating articles, and changing article active status.
- `APIS/CommonAPI.js` - login, logout, and check-auth routes.
- `APIS/AdminAPI.js` - admin article reading and user block/unblock routes.
- `models/userModel.js` - user schema for USER, AUTHOR, and ADMIN roles.
- `models/articleModel.js` - article schema with author reference, content, image URL, comments, and active status.
- `middlewares/verifyToken.js` - JWT verification and role access checks.
- `services/authService.js` - reusable register and login logic.
- `config/` - multer and Cloudinary configuration.

## Environment Variables

Create a `.env` file in this backend folder with:

```env
PORT=4000
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

## Run Locally

```bash
npm install
npm run dev
```

For normal start:

```bash
npm start
```

Default local server URL:

```text
http://localhost:4000
```

## Main API Routes

### Common Auth

- `POST /common-api/login` - login USER, AUTHOR, or ADMIN and return JWT token.
- `GET /common-api/logout` - clear auth cookie.
- `POST /common-api/logout` - clear auth cookie.
- `GET /common-api/check-auth` - verify logged-in user and return user details.

### User Routes

- `POST /user-api/users` - register a normal user. Supports optional `profilePic` upload.
- `GET /user-api/articles` - read all active articles.
- `GET /user-api/articles/:id` - read one active article by id.
- `PUT /user-api/articles` - add a comment to an active article.

### Author Routes

- `POST /author-api/users` - register an author. Supports optional `profilePic` upload.
- `POST /author-api/articles` - create an article as an author.
- `GET /author-api/articles/:authorId` - read articles created by the logged-in author.
- `PUT /author-api/articles` - update the author's own article.
- `PATCH /author-api/articles/:id/status` - activate or deactivate the author's own article.

### Admin Routes

- `GET /admin-api/:aid/articles` - read all articles as admin.
- `PUT /admin-api/:aid/block/:userId` - block a user.
- `PUT /admin-api/:aid/unblock/:userId` - unblock a user.

## Models

### User

User fields include first name, last name, email, password, profile image URL, role, active status, and timestamps. Roles are limited to `USER`, `AUTHOR`, and `ADMIN`.

### Article

Article fields include author, title, category, content, image URL, comments, active status, and timestamps. Comments store the user id and comment text.

## Authentication

Login returns a JWT token and also stores it in an HTTP-only cookie. Protected routes can use either the cookie token or a Bearer token in the `Authorization` header.

## Notes

- User and author passwords are hashed before saving.
- Articles are soft-deleted by changing `isArticleActive`.
- Profile pictures are uploaded through multer memory storage and then sent to Cloudinary.
- Invalid routes and Mongoose validation errors are handled in `server.js`.
