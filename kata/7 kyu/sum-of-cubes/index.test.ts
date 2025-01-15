import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sumCubes from './index.ts';

describe('sumCubes', () => {
  it('should sum the cubed values from 1 to n', () => {
    assert.strictEqual(sumCubes(1), 1);
    assert.strictEqual(sumCubes(2), 9);
    assert.strictEqual(sumCubes(3), 36);
    assert.strictEqual(sumCubes(4), 100);
    assert.strictEqual(sumCubes(10), 3025);
    assert.strictEqual(sumCubes(123), 58155876);
  });
});
