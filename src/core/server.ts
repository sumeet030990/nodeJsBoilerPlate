import { Application } from 'express';
import cluster from 'cluster';
import config from 'config';
import { cpus } from 'os';
import http from 'http';

function Server(app: Application) {
  const server = http.createServer(app);
  const port: number | string = config.get('PORT') || 5000;
  const numCPUs: number = cpus().length; // find no of core in cpu
  if (cluster.isMaster) {
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
    cluster.on('exit', () => {
      cluster.fork(); // create new process if any process is died
    });
  } else {
    server.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(` ${config.get('APP_NAME')} app listening on port ${port} with process id ${process.pid}!`);
    });
  }
}

export default Server;
