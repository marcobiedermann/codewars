import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import addBinary from './index.ts';

describe('addBinary', () => {
  const results1 = addBinary(1, 2);

  it("should return something that isn't falsy", () => {
    assert.strictEqual(typeof results1, 'string');
  });

  it('should return "11"', () => {
    assert.strictEqual(results1, '11');
  });
});
