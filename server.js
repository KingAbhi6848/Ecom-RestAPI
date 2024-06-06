// 1. Import Exprerss
import express from 'express';
import swagger, { serve } from 'swagger-ui-express';
import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';
import cartRouter from './src/features/cartItems/cartItems.routes.js';
import apiDocs from './swagger.json' assert {type:'json'};
import loggerMiddleware from './src/middlewares/logger.middlware.js';

// 2. Create Server
const server = express();

server.use(express.json());

// cors policy

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow any origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specific HTTP methods
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
  if (req.method === 'OPTIONS') {
    res.sendStatus(200); // Handle preflight request
  } else {
    next();
  }
});
server.use('/api-docs',swagger.serve , swagger.setup(apiDocs))
// for all requests related to product, redirect to product routes.
// localhost:3200/api/productss
server.use(loggerMiddleware);
server.use(
  '/api/products',
  jwtAuth,
  productRouter
);
server.use("/api/cartItems", jwtAuth, cartRouter);
server.use('/api/users', userRouter);



// 3. Default request handler
server.get('/', (req, res) => {
  res.send('Welcome to Ecommerce APIs');
});

// 4. Specify port.
server.listen(3200);

console.log('Server is running at 3200');
