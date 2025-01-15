import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import zeroFuel from './index.ts';

describe('zeroFuel', () => {
  it('should check if it is possible to get to the pump', () => {
    assert.strictEqual(zeroFuel(50, 25, 2), true);
    assert.strictEqual(zeroFuel(100, 50, 1), false);
  });
});
