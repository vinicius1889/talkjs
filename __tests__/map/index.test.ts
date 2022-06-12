import { Map } from '../../src/map';

describe('Map tests', () => {
  test('should return the default value', () => {
    const map = new Map({ name: 'some name' });
    const surname = map.getOr('surname', 'no_value_here');

    expect(surname).toEqual('no_value_here');
  });

  test('should change the value', () => {
    const map = new Map({ name: 'some name' });
    const updatedMap = map.set('name', 'name 1');

    expect(updatedMap.getOr('name', undefined)).toEqual('name 1');
  });

  test('should get all keys', () => {
    const map = new Map({ a: 1, b: 2, c: 3 });

    expect(map.keys()).toContain('a');
  });
});
