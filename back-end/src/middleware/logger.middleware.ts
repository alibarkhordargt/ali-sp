import { Injectable, NestMiddleware } from '@nestjs/common';
import { log } from 'console';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    log('Request:', req.headers.origin, req.method);
    log('Headers:', req.headers);
    log('Body:', req.body);
    next();
  }
}
