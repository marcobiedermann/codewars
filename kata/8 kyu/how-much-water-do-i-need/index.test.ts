import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import howMuchWater from './index.ts';

describe('howMuchWater', () => {
  it('should calculate the amount of water needed', () => {
    assert.strictEqual(howMuchWater(10, 10, 21), 'Too much clothes');
    assert.strictEqual(howMuchWater(10, 10, 2), 'Not enough clothes');
    assert.strictEqual(howMuchWater(10, 11, 20), 23.58);
    assert.strictEqual(howMuchWater(50, 15, 29), 189.87);
  });
});
