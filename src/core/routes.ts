import { Application } from 'express';

const apiRoutes = require('../routes/api');
const webRoutes = require('../routes/web');

const routes = (app: Application) => {
  app.use('/api', apiRoutes);
  app.use('', webRoutes);
};

export default routes;
