import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import filterString from './index.ts';

describe('filterString', () => {
  it('should extract number from string', () => {
    assert.strictEqual(filterString('123'), 123);
    assert.strictEqual(filterString('a1b2c3'), 123);
    assert.strictEqual(filterString('aa1bb2cc3dd'), 123);
  });
});
