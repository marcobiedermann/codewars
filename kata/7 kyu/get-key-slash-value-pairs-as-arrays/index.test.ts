import assert from 'assert';
import { describe, it } from 'node:test';
import keysAndValues from './index.ts';

describe('keysAndValues', () => {
  it('should return the keys and values as separate arrays', () => {
    assert.deepEqual(keysAndValues({ a: 1, b: 2, c: 3 }), [
      ['a', 'b', 'c'],
      [1, 2, 3],
    ]);
  });
});
