import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import breakChocolate from './index.ts';

describe('breakChocolate', () => {
  it('should return the minimum number of breaks needed to split the chocolate bar', () => {
    assert.strictEqual(breakChocolate(5, 5), 24);
    assert.strictEqual(breakChocolate(1, 1), 0);
  });
});
