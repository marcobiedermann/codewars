import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { equal1, equal2, equal3, equal4, equal5 } from './index.ts';

describe('equal', () => {
  it('should equal to 100', () => {
    assert.strictEqual(equal1(), 100);
    assert.strictEqual(equal2(), 100);
    assert.strictEqual(equal3(), 100);
    assert.strictEqual(equal4(), 100);
    assert.strictEqual(equal5(), 100);
  });
});
