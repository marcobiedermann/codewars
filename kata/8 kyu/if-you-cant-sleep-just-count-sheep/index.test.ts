import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import countSheep from './index.ts';

describe('countSheep', () => {
  it('should return string with a murmur', () => {
    assert.strictEqual(countSheep(1), '1 sheep...');
    assert.strictEqual(countSheep(2), '1 sheep...2 sheep...');
    assert.strictEqual(countSheep(3), '1 sheep...2 sheep...3 sheep...');
  });
});
