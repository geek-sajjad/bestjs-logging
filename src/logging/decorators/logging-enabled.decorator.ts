import { SetMetadata } from '@nestjs/common';

// TODO create usage of this
export const LoggingEnabled = (enabled: boolean) =>
  SetMetadata('loggingEnabled', enabled);
