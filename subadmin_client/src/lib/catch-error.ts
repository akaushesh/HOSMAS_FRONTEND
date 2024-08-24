// import { logger } from './default-logger';

// type AsyncFunction<T> = (...args: any[]) => Promise<T>;

// export async function catchError<T, U extends unknown[]>(
//   asyncFunction: AsyncFunction<T>,
//   ...args: U
// ): Promise<T | null> {
//   try {
//     const data = await asyncFunction(...args);
//     return data;
//   } catch (error) {
//     logger.error(error);
//     return null;
//   }
// }
