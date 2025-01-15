import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import iqTest from './index.ts';

describe('iqTest', () => {
  it('should return position of different number in string', () => {
    assert.strictEqual(iqTest('2 4 7 8 10'), 3);
    assert.strictEqual(iqTest('1 2 2'), 1);
    assert.strictEqual(iqTest('5 3 2'), 3);
  });
});
