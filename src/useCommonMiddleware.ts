import { Express, json, urlencoded } from 'express';
import morgan from 'morgan';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import bb from 'express-busboy';
import rawParser from './rawParser';
import cors from 'cors';

const useCommonMiddleware = (
  app: Express,
  config: { json?: { limit?: string } } | undefined
) => {
  app.use(cors());
  app.use(morgan('dev'));
  app.use(rawParser);
  app.use(json(config?.json));
  app.use(urlencoded({ extended: true }));
  app.use(methodOverride());
  app.use(cookieParser());
  bb.extend(app, { upload: true });

  app.get('/health-check', (req, res) =>
    res.status(200).json({ body: 'success!' })
  );
};

export default useCommonMiddleware;
