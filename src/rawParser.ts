import { Response, NextFunction } from 'express';
export default (req: any, res: Response, next: NextFunction) => {
  req.rawBody = '';

  req.on('data', function (chunk: string) {
    req.rawBody += chunk;
  });

  next();
};
