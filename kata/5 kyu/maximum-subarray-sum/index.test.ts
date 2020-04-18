import maxSequence from '.';

describe('maxSequence', () => {
  it('should return max sum of subarray', () => {
    expect.assertions(2);

    expect(maxSequence([])).toStrictEqual(0);
    expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toStrictEqual(6);
  });
});
