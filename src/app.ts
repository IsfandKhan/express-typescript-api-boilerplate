import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import createHttpError from 'http-errors';
import cookieParser from 'cookie-parser';
import { mainRouter } from './routes';
import { normalizePort } from './utils';

const app = express();
const port = normalizePort(process.env.PORT || '3000');

// inject dependencies
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// register routes
app.use('/', mainRouter);

// catch 404 and forward to error handler
app.use((_req: Request, _res: Response, next: NextFunction): void => {
  next(createHttpError(404));
});

// error handler
app.use((err: { message: string, status: number }, req: Request, res: Response, _next: NextFunction) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).send('error');
});

app.set('port', port);

export { app };