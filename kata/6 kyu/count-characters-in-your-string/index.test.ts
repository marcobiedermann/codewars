import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import count from './index.ts';

describe('count', () => {
  it('should count characters in string', () => {
    assert.deepEqual(count('aba'), { a: 2, b: 1 });
    assert.deepEqual(count(''), {});
  });
});
