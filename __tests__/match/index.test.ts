import { Match } from '../../src/match';

describe('Match test', () => {
  test('should test the match statement with simple number', async () => {
    const result = await Match.of(2)
      .case(2, (_num: number) => _num * 100)
      .case(4, (_num: number) => _num * 10)
      .check();

    expect(result).toEqual(2 * 100);
  });

  test('should test the match statement with function case', async () => {
    const result = await Match.of(2)
      .case(
        (num: number) => num % 2 === 0,
        () => 'even',
      )
      .check();

    expect(result).toEqual('even');
  });

  test('should test the match case with default statement', async () => {
    const result = await Match.of(3)
      .case(
        (num: number) => num % 2 === 0,
        () => 'even',
      )
      .caseDefault(() => 'odd')
      .check();

    expect(result).toEqual('odd');
  });
});
