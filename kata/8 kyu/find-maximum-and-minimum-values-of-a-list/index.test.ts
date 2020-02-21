import { max, min } from '.';

describe('min', () => {
  it('should return min number in list', () => {
    expect.assertions(2);

    expect(min([-52, 56, 30, 29, -54, 0, -110])).toStrictEqual(-110);
    expect(min([42, 54, 65, 87, 0])).toStrictEqual(0);
  });
});

describe('max', () => {
  it('should return max number in list', () => {
    expect.assertions(2);

    expect(max([4, 6, 2, 1, 9, 63, -134, 566])).toStrictEqual(566);
    expect(max([5])).toStrictEqual(5);
  });
});
