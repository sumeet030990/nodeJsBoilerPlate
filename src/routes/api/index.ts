import { Request, Response, Router } from 'express';

const router = Router();

// router.use('/auth', require('./auth'));
// router.use('/user', require('./user'));

router.use('', (req: Request, res: Response) => {
  res.send('API  Initial page');
});

export default router;
