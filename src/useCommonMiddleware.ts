import { Express, json, urlencoded } from 'express';
import morgan from 'morgan';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import bb from 'express-busboy';

const useCommonMiddleware = (app: Express) => {
  app.use(morgan('dev'));
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(methodOverride());
  app.use(cookieParser());
  bb.extend(app, { upload: true });

  app.get('/health-check', (req, res) =>
    res.status(200).json({ body: 'success!' })
  );
};

export { default as errorHandler } from './errorHandler';
export { default as useNotFoundHandler } from './notFoundHandler';
export default useCommonMiddleware;
