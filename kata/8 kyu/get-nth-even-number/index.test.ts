import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import nthEven from './index.ts';

describe('nthEven', () => {
  it('should return the nth even number', () => {
    assert.strictEqual(nthEven(1), 0);
    assert.strictEqual(nthEven(2), 2);
    assert.strictEqual(nthEven(3), 4);

    assert.strictEqual(nthEven(100), 198);
    assert.strictEqual(nthEven(1298734), 2597466);
  });
});
