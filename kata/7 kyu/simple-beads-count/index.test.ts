import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import countRedBeads from './index.ts';

describe('countRedBeads', () => {
  it('should count red beads', () => {
    assert.strictEqual(countRedBeads(0), 0);
    assert.strictEqual(countRedBeads(1), 0);
    assert.strictEqual(countRedBeads(3), 4);
    assert.strictEqual(countRedBeads(5), 8);
  });
});
