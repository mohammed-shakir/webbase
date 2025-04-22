// src/lib/withLogger.ts
import { NextRequest, NextResponse } from 'next/server';
import { logger } from './logger';
import * as Sentry from '@sentry/nextjs';

export function withLogger(handler: any): any {
  return async (req: NextRequest, context: any) => {
    const log = logger.child({
      method: req.method,
      url: req.nextUrl.pathname,
      reqId: req.headers.get('x-request-id') ?? undefined,
    });

    log.info('► Incoming request');

    try {
      return await handler(req, { ...context, log });
    } catch (err: any) {
      log.error({ err }, '✖ Unhandled exception');
      Sentry.captureException(err);
      throw err;
    }
  };
}
