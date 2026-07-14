/* eslint-disable no-console -- Allow */
export const LogLevel = { NONE: 'NONE', ERROR: 'ERROR', WARN: 'WARN', DEBUG: 'DEBUG', ALL: 'ALL' } as const;

export interface LoggerOptions { level?: keyof typeof LogLevel; prefix?: string; showLevel?: boolean; }

// ponytail: collapsed 72-line Logger class → plain console wrapper; upgrade path: swap to Sentry/Datadog in createLogger
export function createLogger(_opts?: LoggerOptions) {
  return {
    debug: (...args: unknown[]): void => { if (process.env.NODE_ENV !== 'production') console.log(...args); },
    warn:  (...args: unknown[]): void => { if (process.env.NODE_ENV !== 'production') console.warn(...args); },
    error: (...args: unknown[]): void => { console.error(...args); },
  };
}
