import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import rentalCarCost from './index.ts';

describe('regular Tests:', () => {
  it('should work for under 3 days:', () => {
    assert.strictEqual(rentalCarCost(1), 40);
    assert.strictEqual(rentalCarCost(2), 80);
  });

  it('should work for under 7 days:', () => {
    assert.strictEqual(rentalCarCost(3), 100);
    assert.strictEqual(rentalCarCost(4), 140);
    assert.strictEqual(rentalCarCost(5), 180);
    assert.strictEqual(rentalCarCost(6), 220);
  });
  it('should work for 7 or more days:', () => {
    assert.strictEqual(rentalCarCost(7), 230);
    assert.strictEqual(rentalCarCost(8), 270);
    assert.strictEqual(rentalCarCost(9), 310);
    assert.strictEqual(rentalCarCost(10), 350);
  });
});
