import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findNb from './index.ts';

describe('findNb', () => {
  it('should return numbers of cube exactly fitting in volume', () => {
    assert.strictEqual(findNb(4183059834009), 2022);
    assert.strictEqual(findNb(24723578342962), -1);
    assert.strictEqual(findNb(135440716410000), 4824);
    assert.strictEqual(findNb(40539911473216), 3568);
  });
});
