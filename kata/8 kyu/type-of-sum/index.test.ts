import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import typeOfSum from './index.ts';

describe('typeOfSum', () => {
  it('should', () => {
    assert.strictEqual(typeOfSum(12, 1), 'number');
    assert.strictEqual(typeOfSum('d', 1), 'string');
    assert.strictEqual(typeOfSum(1, 'a'), 'string');
    assert.strictEqual(typeOfSum('dd', ''), 'string');
    assert.strictEqual(typeOfSum(true, 1), 'number');
    assert.strictEqual(typeOfSum('s', false), 'string');
    assert.strictEqual(typeOfSum(null, 1), 'number');
    assert.strictEqual(typeOfSum('s', null), 'string');
    assert.strictEqual(typeOfSum(null, undefined), 'number');
    assert.strictEqual(typeOfSum(undefined, 're'), 'string');
    assert.strictEqual(typeOfSum(undefined, true), 'number');
    assert.strictEqual(typeOfSum(null, false), 'number');
  });
});
