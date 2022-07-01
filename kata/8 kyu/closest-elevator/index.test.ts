import { expect } from 'vitest';
import elevator from '.';

describe('elevator', () => {
  it("if the left elevator is closer to the call, should return 'left'", () => {
    expect(elevator(0, 1, 0)).toBe('left');
  });

  it("if the right elevator is closer to the call, should return 'right'", () => {
    expect(elevator(0, 1, 1)).toBe('right');
    expect(elevator(0, 1, 2)).toBe('right');
  });

  it("if both elevators are on the same floor, should return 'right'", () => {
    expect(elevator(0, 0, 0)).toBe('right');
  });

  it("if both elevators are in equal distance from the call, should return 'right'", () => {
    expect(elevator(0, 2, 1)).toBe('right');
  });
});
