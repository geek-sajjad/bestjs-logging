import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RequestLoggerMiddleware } from './middlewares/request.middleware';
import { LoggingService } from './logging.service';
import { LoggingRepository } from './logging.repository';

@Module({
  imports: [ConfigModule],
  providers: [LoggingService, LoggingRepository],
  exports: [LoggingService, LoggingRepository],
})
export class LoggingModule implements NestModule {
  constructor(private readonly configService: ConfigService) {}

  configure(consumer: MiddlewareConsumer) {
    const isLoggingEnabled = this.configService.get<boolean>('logging.enabled');

    if (isLoggingEnabled) {
      consumer.apply(RequestLoggerMiddleware).forRoutes('*');
    }
  }
}
