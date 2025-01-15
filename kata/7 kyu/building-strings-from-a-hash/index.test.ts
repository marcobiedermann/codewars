import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solution from './index.ts';

describe('solution', () => {
  it('should stringify object entries', () => {
    assert.strictEqual(solution({ a: 1, b: '2' }), 'a = 1,b = 2');
  });
});
