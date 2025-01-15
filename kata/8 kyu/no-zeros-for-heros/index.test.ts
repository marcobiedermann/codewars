import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import noBoringZeros from './index.ts';

describe('noBoringZeros', () => {
  it('should remove trailing zeros from number', () => {
    assert.strictEqual(noBoringZeros(1450), 145);
    assert.strictEqual(noBoringZeros(960000), 96);
    assert.strictEqual(noBoringZeros(1050), 105);
    assert.strictEqual(noBoringZeros(-1050), -105);
    assert.strictEqual(noBoringZeros(-105), -105);
    assert.strictEqual(noBoringZeros(0), 0);
  });
});
