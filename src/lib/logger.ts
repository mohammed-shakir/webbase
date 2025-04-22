import pino from 'pino';
import { createGcpLoggingPinoConfig } from '@google-cloud/pino-logging-gcp-config';

const isGcp = Boolean(process.env.GOOGLE_CLOUD_PROJECT);
const isWorkerSupported = typeof Worker !== 'undefined';

const baseConfig = {
  level: process.env.LOG_LEVEL || (isGcp ? 'info' : 'debug'),
  serviceContext: {
    service: process.env.SERVICE_NAME || 'webbase',
  },
};

// Declare logger variable
export const logger = isGcp
  ? pino(createGcpLoggingPinoConfig(baseConfig))
  : pino({
      ...baseConfig,
      transport: isWorkerSupported
        ? {
            target: 'pino-pretty',
            options: {
              colorize: true,
              translateTime: 'SYS:standard',
            },
          }
        : undefined,
    });
