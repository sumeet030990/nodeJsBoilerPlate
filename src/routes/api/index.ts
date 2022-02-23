import { Request, Response } from 'express';

const router = require('express').Router();

// router.use('/auth', require('./auth'));
// router.use('/user', require('./user'));

router.use('', (req: Request, res: Response) => {
  res.send('API  Initial page');
});

module.exports = router;
