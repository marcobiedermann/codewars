import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import plural from './index.ts';

describe('plural', () => {
  it('should check if plural should be used', () => {
    assert.strictEqual(plural(0), true);
    assert.strictEqual(plural(0.5), true);
    assert.strictEqual(plural(1), false);
    assert.strictEqual(plural(100), true);
    assert.strictEqual(plural(Infinity), true);
  });
});
