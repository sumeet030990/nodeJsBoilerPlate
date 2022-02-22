import express, { Application, Request, Response } from 'express';
import cluster from 'cluster';
import config from 'config';
import { cpus } from 'os';
import http from 'http';

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();

const app: Application = express();
const port: number | string = config.get('PORT') || 5000;
const numCPUs: number = cpus().length;

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

if (cluster.isPrimary) {
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', () => {
    cluster.fork(); // create new process if any process is died
  });
} else {
  http.createServer().listen(port);
  // eslint-disable-next-line no-console
  console.log(` ${config.get('APP_NAME')} app listening on port ${port} with process id ${process.pid}!`);
}
