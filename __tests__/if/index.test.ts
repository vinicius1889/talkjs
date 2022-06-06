import { If } from '../../src/if';

describe('If tests', () => {
  test('should test the if statement in a simple way', () => {
    const result = If.of(2)
      .is(2)
      .is((value: number) => value % 2 === 0)
      .check();

    expect(result).toBeTruthy();
  });

  test('should fail trying to validate the if statement', () => {
    const result = If.of(20)
      .is(2)
      .is((value: number) => value % 2 === 0)
      .check();

    expect(result).toBeFalsy();
  });

  test('should validate the if with or', () => {
    const result = If.of(20).is(2).or(20).check();

    expect(result).toBeTruthy();
  });

  test('should validate using the not method', () => {
    const resultTrue = If.of(20).is(10).not().check();
    const resultFalse = If.of(20).is(20).not().check();

    expect(resultTrue).toBeTruthy();
    expect(resultFalse).toBeFalsy();
  });
});
