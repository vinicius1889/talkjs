import { Try } from '../../src/try';
import { sleep } from '../../src/utils';

describe('Try tests', () => {
  test('should execute a simple try', async () => {
    const success = await Try.of(() => 1 + 1).do();

    expect(success).toBeTruthy();
  });

  test('should execute a simple try with delay', async () => {
    const timeDelay = 300;
    const timeAgo = new Date().getTime();
    const success = await Try.of(async () => await sleep(timeDelay)).do();
    const timeNow = new Date().getTime();

    expect(timeNow - timeAgo).toBeGreaterThanOrEqual(timeDelay);
    expect(success).toBeTruthy();
  });

  test('should execute a simple try with delay and fail', async () => {
    const success = await Try.of(async () => {
      await sleep(500);
      throw new Error('A new error here');
    }).do();

    expect(success).toBeFalsy();
  });

  test('should execute a getOrElse with success', async () => {
    const success = await Try.of(() => 1 + 1).getOrElse<number, undefined>(
      undefined,
    );

    expect(success).toBeTruthy();
  });

  test('should execute getOrElse with delay', async () => {
    const timeDelay = 500;
    const timeAgo = new Date().getTime();
    const success = await Try.of(async () => {
      await sleep(timeDelay);

      return 1;
    }).getOrElse<number, boolean>(false);
    const timeNow = new Date().getTime();

    expect(timeNow - timeAgo).toBeGreaterThanOrEqual(timeDelay);
    expect(success).toEqual(1);
  });

  test('should execute getOrElse with delay and get the default value', async () => {
    const timeDelay = 500;
    const timeAgo = new Date().getTime();
    const success = await Try.of(async () => {
      await sleep(timeDelay);
      throw new Error('Some undefined error');
    }).getOrElse<number, boolean>(false);
    const timeNow = new Date().getTime();

    expect(timeNow - timeAgo).toBeGreaterThanOrEqual(timeDelay);
    expect(success).toBeFalsy();
  });
});
