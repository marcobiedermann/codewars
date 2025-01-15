import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import numPrimorial from './index.ts';

describe('numPrimorial', () => {
  it('should return primorial of `n`', () => {
    assert.strictEqual(numPrimorial(3), 30);
    assert.strictEqual(numPrimorial(4), 210);
    assert.strictEqual(numPrimorial(5), 2310);
    assert.strictEqual(numPrimorial(8), 9699690);
    assert.strictEqual(numPrimorial(9), 223092870);
  });
});
