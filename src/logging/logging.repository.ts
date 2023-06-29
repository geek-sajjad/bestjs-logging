import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Logging } from './entities/logging.entity';

@Injectable()
export class LoggingRepository extends Repository<Logging> {
  constructor(private dataSource: DataSource) {
    super(Logging, dataSource.createEntityManager());
  }
}
