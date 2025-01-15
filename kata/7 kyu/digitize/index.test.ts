import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import digitize from './index.ts';

describe('digitize', () => {
  it('should return list of individual digits', () => {
    assert.deepEqual(digitize(123), [1, 2, 3]);
    assert.deepEqual(digitize(1), [1]);
    assert.deepEqual(digitize(0), [0]);
    assert.deepEqual(digitize(1230), [1, 2, 3, 0]);
    assert.deepEqual(digitize(8675309), [8, 6, 7, 5, 3, 0, 9]);
  });
});
