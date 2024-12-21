import { Injectable, NestMiddleware } from '@nestjs/common';
import { log } from 'console';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    log('Origin:', req.headers.origin);
    log('Headers:', req.headers);
    log('Incoming request:', req.method, req.url);
    next();
  }
}
