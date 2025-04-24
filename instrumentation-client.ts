import * as Sentry from '@sentry/nextjs';
import { captureRouterTransitionStart } from '@sentry/nextjs';

export function register() {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 0.05,
    enabled: process.env.NODE_ENV === 'production',
  });
}

export const onRouterTransitionStart = captureRouterTransitionStart;
