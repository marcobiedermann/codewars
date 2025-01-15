import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import nbDig from './index.ts';

describe('nbDig', () => {
  it('should count all digits used in writing all `k**2`', () => {
    assert.strictEqual(nbDig(5750, 0), 4700);
    assert.strictEqual(nbDig(11011, 2), 9481);
    assert.strictEqual(nbDig(12224, 8), 7733);
    assert.strictEqual(nbDig(11549, 1), 11905);
  });
});
