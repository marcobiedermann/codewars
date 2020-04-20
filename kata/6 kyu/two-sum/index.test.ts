import twoSum from '.';

describe('twoSum', () => {
  it('should', () => {
    expect.assertions(3);

    expect(twoSum([1, 2, 3], 4)).toStrictEqual([0, 2]);
    expect(twoSum([1234, 5678, 9012], 14690)).toStrictEqual([1, 2]);
    expect(twoSum([2, 2, 3], 4)).toStrictEqual([0, 1]);
  });
});
