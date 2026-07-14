/* eslint-disable no-console -- Allow */
export const LogLevel = { NONE: 'NONE', ERROR: 'ERROR', WARN: 'WARN', DEBUG: 'DEBUG', ALL: 'ALL' } as const;
export interface LoggerOptions { level?: keyof typeof LogLevel; prefix?: string; showLevel?: boolean; }
export function createLogger(_opts?: LoggerOptions) {
  return {
    debug: (...args: unknown[]) => { if (process.env.NODE_ENV !== 'production') console.log(...args); },
    warn:  (...args: unknown[]) => { if (process.env.NODE_ENV !== 'production') console.warn(...args); },
    error: (...args: unknown[]) => console.error(...args),
  };
}
