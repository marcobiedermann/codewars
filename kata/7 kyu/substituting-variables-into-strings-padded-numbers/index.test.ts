import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solution from './index.ts';

describe('solution', () => {
  it('should return a 5 digit padded number', () => {
    assert.strictEqual(solution(5), 'Value is 00005');
    assert.strictEqual(solution(1204), 'Value is 01204');
    assert.strictEqual(solution(109), 'Value is 00109');
    assert.strictEqual(solution(0), 'Value is 00000');
  });
});
