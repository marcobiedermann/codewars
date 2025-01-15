import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solve from './index.ts';

describe('solve', () => {
  it('should reverse string while keeping position of spaces', () => {
    assert.strictEqual(solve('codewars'), 'srawedoc');
    assert.strictEqual(solve('your code'), 'edoc ruoy');
    assert.strictEqual(solve('your code rocks'), 'skco redo cruoy');
    assert.strictEqual(solve('i love codewars'), 's rawe docevoli');
  });
});
