import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import count from './index.ts';

describe('count', () => {
  it('should count all element in an array', () => {
    assert.deepEqual(count(['a', 'a', 'b', 'b', 'b']), { a: 2, b: 3 });
  });
});
