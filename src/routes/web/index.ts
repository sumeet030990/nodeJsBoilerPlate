import { Request, Response } from 'express';

const router = require('express').Router();

router.use('/home', (req: Request, res: Response) => {
  res.send('home Initial page');
});

router.use('', (req: Request, res: Response) => {
  res.send('Initial page');
});

module.exports = router;
