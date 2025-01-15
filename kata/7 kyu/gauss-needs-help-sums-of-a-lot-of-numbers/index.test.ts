import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import f from './index.ts';

describe('f', () => {
  it('should sum up all number through `n`', () => {
    assert.strictEqual(f(100), 5050);
    assert.strictEqual(f(300), 45150);
    assert.strictEqual(f(50000), 1250025000);
    assert.strictEqual(f('n'), false);
    assert.strictEqual(f(), false);
    assert.strictEqual(f(3.14), false);
    assert.strictEqual(f(0), false);
    assert.strictEqual(f(-10), false);
  });
});
