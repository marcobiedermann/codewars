import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import checkExam from './index.ts';

describe('checkExam', () => {
  it('should calculate score of exam', () => {
    assert.strictEqual(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']), 6);
    assert.strictEqual(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']), 7);
    assert.strictEqual(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']), 16);
    assert.strictEqual(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c']), 0);
  });
});
