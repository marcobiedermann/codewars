import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import arithmetic from './index.ts';

describe('arithmetic', () => {
  it('should calculate result', () => {
    assert.strictEqual(arithmetic(1, 2, 'add'), 3);
    assert.strictEqual(arithmetic(8, 2, 'subtract'), 6);
    assert.strictEqual(arithmetic(5, 2, 'multiply'), 10);
    assert.strictEqual(arithmetic(8, 2, 'divide'), 4);
  });
});
