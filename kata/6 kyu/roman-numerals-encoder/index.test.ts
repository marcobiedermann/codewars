import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solution from './index.ts';

describe('solution', () => {
  it('should handle small numbers', () => {
    assert.strictEqual(solution(1), 'I');
    assert.strictEqual(solution(2), 'II');
    assert.strictEqual(solution(3), 'III');
    assert.strictEqual(solution(4), 'IV');
    assert.strictEqual(solution(5), 'V');
    assert.strictEqual(solution(9), 'IX');
    assert.strictEqual(solution(10), 'X');
    assert.strictEqual(solution(11), 'XI');
    assert.strictEqual(solution(19), 'XIX');
    assert.strictEqual(solution(22), 'XXII');
    assert.strictEqual(solution(15), 'XV');
  });

  it('should handle large numbers', () => {
    assert.strictEqual(solution(1000), 'M');
    assert.strictEqual(solution(1001), 'MI');
    assert.strictEqual(solution(1990), 'MCMXC');
    assert.strictEqual(solution(2007), 'MMVII');
    assert.strictEqual(solution(2008), 'MMVIII');
  });
});
