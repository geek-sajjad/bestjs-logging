import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { LoggingEnabled } from './logging/decorators/logging-enabled.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @LoggingEnabled(true)
  @Get('/test')
  test(): string {
    return 'just testing';
  }
}
