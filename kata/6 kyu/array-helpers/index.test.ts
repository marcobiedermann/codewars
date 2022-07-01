import { average, cube, even, odd, square, sum } from '.';

describe('foo', () => {
  it('should', () => {
    const numbers = [1, 2, 3, 4, 5];

    expect(square(numbers)).toStrictEqual([1, 4, 9, 16, 25]);
    expect(cube(numbers)).toStrictEqual([1, 8, 27, 64, 125]);
    expect(sum(numbers)).toBe(15);
    expect(average(numbers)).toBe(3);
    expect(even(numbers)).toStrictEqual([2, 4]);
    expect(odd(numbers)).toStrictEqual([1, 3, 5]);
  });
});
