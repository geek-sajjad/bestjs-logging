import { Injectable } from '@nestjs/common';
import { LoggingRepository } from './logging.repository';

@Injectable()
export class LoggingService {
  constructor(private readonly loggingRepository: LoggingRepository) {}

  findAll() {
    // TODO get all logs and paginate them
  }

  logData(data: string) {
    // TODO save data on db using loggingRepository
  }
}
