import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import balancedNum from './index.ts';

describe('balancedNum', () => {
  it('check balanced number', () => {
    assert.strictEqual(balancedNum(7), 'Balanced');
    assert.strictEqual(balancedNum(959), 'Balanced');
    assert.strictEqual(balancedNum(13), 'Balanced');
    assert.strictEqual(balancedNum(432), 'Not Balanced');
    assert.strictEqual(balancedNum(424), 'Balanced');
  });

  it('check Larger number', () => {
    assert.strictEqual(balancedNum(1024), 'Not Balanced');
    assert.strictEqual(balancedNum(66545), 'Not Balanced');
    assert.strictEqual(balancedNum(295591), 'Not Balanced');
    assert.strictEqual(balancedNum(1230987), 'Not Balanced');
    assert.strictEqual(balancedNum(56239814), 'Balanced');
  });
});
