import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import a from './index.ts';

describe('a', () => {
  it('should convert number to string', () => {
    assert.strictEqual(a, '123');
  });
});
