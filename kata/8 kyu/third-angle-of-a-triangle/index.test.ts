import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import otherAngle from './index.ts';

describe('otherAngle', () => {
  it('should return third angle of triangle', () => {
    assert.strictEqual(otherAngle(30, 60), 90);
    assert.strictEqual(otherAngle(60, 60), 60);
    assert.strictEqual(otherAngle(43, 78), 59);
    assert.strictEqual(otherAngle(10, 20), 150);
  });
});
