import { registerAs } from '@nestjs/config';

export default registerAs('logging', () => ({
  enabled: process.env.logging_enabled === 'true' ? true : false,
  save: process.env.logging_db_save === 'true' ? true : false,
  consoleLog: process.env.logging_console === 'true' ? true : false,
}));
