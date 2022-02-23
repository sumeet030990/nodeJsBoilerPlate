import express, { Application } from 'express';
import routes from './core/routes';
import server from './core/server';

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();

const app: Application = express();

// Imports all of the routes from ./routes/index.js
routes(app);

// Configure and Start Server
server(app);
