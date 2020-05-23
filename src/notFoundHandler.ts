import { Express, Request, Response } from 'express';
const useNotFoundHandler = (app: Express) =>
  app
    .route('/*')
    .get((req: Request, res: Response) => res.status(404).send('Not Found'));

export default useNotFoundHandler;
