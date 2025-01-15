import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solution from './index.ts';

describe('solution', () => {
  it('should decode roman number', () => {
    assert.strictEqual(solution('XXI'), 21);
    assert.strictEqual(solution('I'), 1);
    assert.strictEqual(solution('IV'), 4);
    assert.strictEqual(solution('MMVIII'), 2008);
    assert.strictEqual(solution('MDCLXVI'), 1666);
  });
});
