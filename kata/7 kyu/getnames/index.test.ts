import { describe, expect, it } from 'vitest';
import getNames from './index.ts';

describe('getNames', () => {
  it('should return a list of names', () => {
    expect.assertions(1);

    expect(
      getNames([
        { name: 'Joe', age: 20 },
        { name: 'Bill', age: 30 },
        { name: 'Kate', age: 23 },
      ]),
    ).toStrictEqual(['Joe', 'Bill', 'Kate']);
  });
});
