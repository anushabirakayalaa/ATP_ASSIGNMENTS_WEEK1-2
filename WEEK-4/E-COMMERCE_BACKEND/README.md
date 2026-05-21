# E-Commerce Backend

A simple Express and MongoDB backend for an e-commerce app. It manages users, products, and adding products to a user's cart.

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- bcrypt for password hashing

## Features

- Create users with hashed passwords
- Create products
- Add products to a user's cart
- Get a user by ID with cart product details

## Project Structure

```text
E-COMMERCE_BACKEND/
  APIS/
    ProductAPI.js
    UserAPI.js
  models/
    productModel.js
    userModel.js
  server.js
  test.http
```

## API Routes

| Method | Route | Description |
| --- | --- | --- |
| POST | `/user-api/users` | Create a new user |
| GET | `/user-api/users/:uid` | Get user details by ID |
| POST | `/product-api/products` | Create a new product |
| PUT | `/user-api/user-cart/user-id/:uid/product-id/:pid` | Add a product to a user's cart |

## Setup

Install dependencies:

```bash
npm install
```

Start MongoDB locally and make sure it is available at:

```text
mongodb://localhost:27017/ecomdb
```

Run the server:

```bash
npm start
```

The server runs on:

```text
http://localhost:4000
```

Use `test.http` to try the available API requests.
