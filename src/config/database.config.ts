import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.database_host || 'localhost',
  port: process.env.database_port || '5432',
  username: process.env.database_username || 'postgres',
  password: process.env.database_password || 'postgres',
  name: process.env.database_name || 'logging',
  type: process.env.database_type || 'postgres',
}));
