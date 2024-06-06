Ecommerce API
This is an Ecommerce API built using Node.js and Express. It provides endpoints for managing products, users, and cart items. It also includes JWT authentication and Swagger documentation.

Getting Started
These instructions will help you set up and run the project on your local machine for development and testing purposes.

Prerequisites
Node.js (v14 or higher)
npm (v6 or higher)
Installation
Clone the repository:

sh
Copy code
git clone https://github.com/yourusername/ecommerce-api.git
cd ecommerce-api
Install the dependencies:

sh
Copy code
npm install
Create a .env file in the root directory and add the necessary environment variables:

makefile
Copy code
JWT_SECRET=your_jwt_secret
Running the Server
Start the server:

sh
Copy code
npm start
The server will run on port 3200. You can access it at http://localhost:3200.

API Documentation
Swagger documentation is available at:

bash
Copy code
http://localhost:3200/api-docs
API Endpoints
Products
GET /api/products - Get all products
GET /api/products/:id - Get a specific product by ID
POST /api/products - Create a new product
PUT /api/products/:id - Update a product by ID
DELETE /api/products/:id - Delete a product by ID
Users
GET /api/users - Get all users
GET /api/users/:id - Get a specific user by ID
POST /api/users - Create a new user
PUT /api/users/:id - Update a user by ID
DELETE /api/users/:id - Delete a user by ID
Cart Items
GET /api/cartItems - Get all cart items
GET /api/cartItems/:id - Get a specific cart item by ID
POST /api/cartItems - Add a new cart item
PUT /api/cartItems/:id - Update a cart item by ID
DELETE /api/cartItems/:id - Delete a cart item by ID
Middleware
jwtAuth - JWT authentication middleware to secure routes
loggerMiddleware - Logger middleware to log requests
CORS Policy
The server is configured to allow requests from any origin and supports the following HTTP methods:

GET
POST
PUT
DELETE
It also allows the following headers:

Content-Type
Authorization
Default Route
The default route (GET /) will return:

css
Copy code
Welcome to Ecommerce APIs
License
This project is licensed under the MIT License.