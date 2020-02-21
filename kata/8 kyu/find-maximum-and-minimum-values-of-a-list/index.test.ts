import { max, min } from '.';

describe('min', () => {
  it('should return min number in list', () => {
    expect(min([-52, 56, 30, 29, -54, 0, -110])).toEqual(-110);
    expect(min([42, 54, 65, 87, 0])).toEqual(0);
  });
});

describe('max', () => {
  it('should return max number in list', () => {
    expect(max([4, 6, 2, 1, 9, 63, -134, 566])).toEqual(566);
    expect(max([5])).toEqual(5);
  });
});
