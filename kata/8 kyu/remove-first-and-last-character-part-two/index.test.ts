import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import array from './index.ts';

describe('array', () => {
  it('should remove the first and last character', () => {
    assert.strictEqual(array('1,2,3'), '2');
    assert.strictEqual(array('1,2,3,4'), '2 3');
    assert.strictEqual(array('1,2,3,4,5'), '2 3 4');
  });

  it('should return null if the final result is an empty string', () => {
    assert.strictEqual(array(''), null);
    assert.strictEqual(array('1'), null);
    assert.strictEqual(array('1,2'), null);
  });
});
