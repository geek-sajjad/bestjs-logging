import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, NextFunction } from 'express';
import { LoggingService } from '../logging.service';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  private readonly logger: Logger;

  constructor(
    private readonly loggingService: LoggingService,
    private readonly configService: ConfigService,
  ) {
    this.logger = new Logger(RequestLoggerMiddleware.name);
  }

  use(req: Request, res: any, next: NextFunction) {
    const isConsoleLoggingEnabled =
      this.configService.get<boolean>('logging.consoleLog');

    const isDbSaveEnabled = this.configService.get<boolean>('logging.save');

    const requestLog = {
      method: req.method,
      path: req.originalUrl,
      body: req.body,
      query: req.query,
      timestamp: new Date(),
    };

    const originalSend = res.send;

    res.send = async (body) => {
      const responseLog = {
        status: res.statusCode,
        body,
        timestamp: new Date(),
      };

      if (isConsoleLoggingEnabled)
        this.logger.debug({
          request: requestLog,
          response: responseLog,
        });

      const logDataString = JSON.stringify({
        request: requestLog,
        response: responseLog,
      });

      if (isDbSaveEnabled) this.loggingService.logData(logDataString);

      originalSend.call(res, body);
    };

    next();
  }
}
