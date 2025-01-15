import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import prefill from './index.ts';

describe('prefill', () => {
  it('should prefill an array of `n` elements having value `v`', () => {
    assert.deepEqual(prefill(3, 1), [1, 1, 1]);
    assert.deepEqual(prefill(2, 'abc'), ['abc', 'abc']);
    assert.deepEqual(prefill('1', 1), [1]);
    assert.deepEqual(prefill(0, 1), []);
    assert.deepEqual(prefill(3, prefill(2, '2d')), [
      ['2d', '2d'],
      ['2d', '2d'],
      ['2d', '2d'],
    ]);

    const t = () => prefill('xyz', 1);

    assert.throws(t, TypeError);
    assert.throws(t, new TypeError('xyz is invalid'));
  });
});
