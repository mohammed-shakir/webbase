import * as Sentry from '@sentry/nextjs';
import type { NextRequest, NextResponse } from 'next/server';
import type { Logger } from 'pino';

import { logger } from './logger';

type Handler = (req: NextRequest, context: { log: Logger }) => Promise<NextResponse>;

export function withLogger(handler: Handler) {
  return async function (req: NextRequest) {
    const log = logger.child({
      method: req.method,
      url: req.nextUrl.pathname,
      reqId: req.headers.get('x-request-id') ?? undefined,
    });

    log.info('► Incoming request');

    try {
      return await handler(req, { log });
    } catch (err: unknown) {
      log.error({ err }, '✖ Unhandled exception');
      Sentry.captureException(err);
      throw err;
    }
  };
}
