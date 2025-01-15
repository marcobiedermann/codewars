import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import overTheRoad from './index.ts';

describe('overTheRoad', () => {
  it('should return house address on opposite side', () => {
    assert.strictEqual(overTheRoad(1, 3), 6);
    assert.strictEqual(overTheRoad(3, 3), 4);
    assert.strictEqual(overTheRoad(3, 5), 8);
    assert.strictEqual(overTheRoad(2, 3), 5);
  });
});
