import { describe, expect, it } from 'vitest';
import Ship from '.';

describe('ship', () => {
  it('should check if the ship is worth it', () => {
    expect.assertions(1);

    const emptyShip = new Ship(0, 0);

    expect(emptyShip.isWorthIt()).toBe(false);
  });
});
