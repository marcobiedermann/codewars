import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solution from './index.ts';

describe('solution', () => {
  it('should check if string end with', () => {
    assert.strictEqual(solution('abcde', 'cde'), true);
    assert.strictEqual(solution('abcde', 'abc'), false);
  });
});
