/**
 * Sleep utils
 * @example
 * ```js
 * sleep(1000); // 1 second
 * //=> false
 *
 * ```
 * @param ms: number - the amount of milliseconds to wait
 */
export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
