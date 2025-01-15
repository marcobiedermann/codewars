import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solution from './index.ts';

describe('solution', () => {
  it('should split string into pairs of two', () => {
    assert.deepEqual(solution('abcdef'), ['ab', 'cd', 'ef']);
    assert.deepEqual(solution('abcdefg'), ['ab', 'cd', 'ef', 'g_']);
    assert.deepEqual(solution(''), []);
  });
});
