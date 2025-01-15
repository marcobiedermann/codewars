import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import finalGrade from './index.ts';

describe('finalGrade', () => {
  it('should calculate final grade', () => {
    assert.strictEqual(finalGrade(100, 12), 100);
    assert.strictEqual(finalGrade(85, 5), 90);
    assert.strictEqual(finalGrade(55, 3), 75);
    assert.strictEqual(finalGrade(55, 0), 0);
  });
});
