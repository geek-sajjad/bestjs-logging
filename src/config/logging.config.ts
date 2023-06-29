import { registerAs } from '@nestjs/config';

export default registerAs('logging', () => ({
  enabled: process.env.LOGGING_ENABLED === 'true' ? true : false,
  save: process.env.LOGGING_DB_SAVE === 'true' ? true : false,
  consoleLog: process.env.LOGGING_CONSOLE === 'true' ? true : false,
}));
