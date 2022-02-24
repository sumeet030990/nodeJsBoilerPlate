import { Application } from 'express';
import apiRoutes from '../routes/api';
import webRoutes from '../routes/web';

const routes = (app: Application) => {
  app.use('/api', apiRoutes);
  app.use('', webRoutes);
};

export default routes;
