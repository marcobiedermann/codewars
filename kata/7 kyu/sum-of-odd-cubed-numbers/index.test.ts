import cubeOdd from '.';

describe('cubeOdd', () => {
  it('should return sum of odd numbers after cubing each', () => {
    expect.assertions(3);

    expect(cubeOdd([1, 2, 3, 4])).toStrictEqual(28);
    expect(cubeOdd([-3, -2, 2, 3])).toStrictEqual(0);
    expect(cubeOdd(['a', 12, 9, 'z', 42])).toBeUndefined();
  });
});
