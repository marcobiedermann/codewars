import { expect } from 'vitest';
import getNames from '.';

describe('getNames', () => {
  it('should return a list of names', () => {
    expect(
      getNames([
        { name: 'Joe', age: 20 },
        { name: 'Bill', age: 30 },
        { name: 'Kate', age: 23 },
      ]),
    ).toStrictEqual(['Joe', 'Bill', 'Kate']);
  });
});
