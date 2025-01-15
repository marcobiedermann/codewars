import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Ship from './index.ts';

describe('ship', () => {
  it('should check if the ship is worth it', () => {
    const emptyShip = new Ship(0, 0);

    assert.strictEqual(emptyShip.isWorthIt(), false);
  });
});
