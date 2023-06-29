import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { Logging } from 'src/logging/entities/logging.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const host = configService.get<string>('database.host');
        const port = configService.get<number>('database.port');
        const username = configService.get<string>('database.username');
        const password = configService.get<string>('database.password');
        const name = configService.get<string>('database.name');
        const type = configService.get<string>('database.type');

        return {
          type,
          host,
          port,
          username,
          password,
          database: name,

          entities: [Logging],

          // TODO turn this off for production and use migrations
          synchronize: true,
        };
      },
      inject: [ConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class DatabaseModule {}
