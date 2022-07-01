import { max, min } from '.';

describe('min', () => {
  it('should return min number in list', () => {
    expect(min([-52, 56, 30, 29, -54, 0, -110])).toStrictEqual(-110);
    expect(min([42, 54, 65, 87, 0])).toBe(0);
  });
});

describe('max', () => {
  it('should return max number in list', () => {
    expect(max([4, 6, 2, 1, 9, 63, -134, 566])).toBe(566);
    expect(max([5])).toBe(5);
  });
});
