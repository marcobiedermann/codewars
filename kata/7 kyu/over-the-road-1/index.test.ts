import { describe, expect, it } from 'vitest';
import overTheRoad from '.';

describe('overTheRoad', () => {
  it('should return house address on opposite side', () => {
    expect.assertions(4);

    expect(overTheRoad(1, 3)).toBe(6);
    expect(overTheRoad(3, 3)).toBe(4);
    expect(overTheRoad(3, 5)).toBe(8);
    expect(overTheRoad(2, 3)).toBe(5);
  });
});
