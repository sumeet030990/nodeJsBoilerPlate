import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port: number = 3000;

        app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
