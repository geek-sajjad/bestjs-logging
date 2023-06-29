import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // throw new NotFoundException('not found');
    return 'Hello World!';
  }
}
