import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getNames from './index.ts';

describe('getNames', () => {
  it('should return a list of names', () => {
    assert.deepEqual(
      getNames([
        { name: 'Joe', age: 20 },
        { name: 'Bill', age: 30 },
        { name: 'Kate', age: 23 },
      ]),
      ['Joe', 'Bill', 'Kate'],
    );
  });
});
