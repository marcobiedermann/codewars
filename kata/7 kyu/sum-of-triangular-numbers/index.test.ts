import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sumTriangularNumbers from './index.ts';

describe('sumTriangularNumbers', () => {
  it('should calculate sum of triangular numbers', () => {
    assert.strictEqual(sumTriangularNumbers(6), 56);
    assert.strictEqual(sumTriangularNumbers(34), 7140);
    assert.strictEqual(sumTriangularNumbers(-291), 0);
    assert.strictEqual(sumTriangularNumbers(943), 140205240);
    assert.strictEqual(sumTriangularNumbers(-971), 0);
  });
});
