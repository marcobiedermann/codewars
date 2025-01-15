import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import calc from './index.ts';

describe('calc', () => {
  it('should', () => {
    assert.strictEqual(calc(''), 0);
    assert.strictEqual(calc('3'), 3);
    assert.strictEqual(calc('3.5'), 3.5);
    assert.strictEqual(calc('1 3 +'), 4);
    assert.strictEqual(calc('1 3 *'), 3);
    assert.strictEqual(calc('1 3 -'), -2);
    assert.strictEqual(calc('4 2 /'), 2);
  });
});
