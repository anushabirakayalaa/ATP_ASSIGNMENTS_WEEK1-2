# Week 3 - Backend Development with Express and MongoDB

This week introduces REST API development using Express.js, followed by MongoDB integration with Mongoose.

## Topics Covered

- Creating an Express server.
- Using routers for separate user and product APIs.
- Handling JSON request bodies with middleware.
- Building CRUD routes using `GET`, `POST`, `PUT`, and `DELETE`.
- Connecting Express to MongoDB through Mongoose.
- Creating schemas and models for users and products.
- Using validations, timestamps, and strict schema rules.
- Basic cookie and JWT token verification setup.

## Projects

- `BACKEND_DEMO_1/` - in-memory Express REST APIs for users and products.
  - User routes support create, read, update, get by id, and delete.
  - Product routes support create, read, get by id, get by brand, update, and delete.

- `BACKEND_DEMO_2/` - MongoDB-backed Express APIs.
  - Connects to local MongoDB database `anuragdb`.
  - User model includes username, password, and age validation.
  - Product model includes product id, product name, and price validation.
  - APIs perform database create, read, update, and delete operations.

## Outcome

The code demonstrates the transition from simple in-memory API storage to persistent database-backed APIs using Express and Mongoose.
