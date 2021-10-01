import maxSequence from '.';

describe('maxSequence', () => {
  it('should return max sum of subarray', () => {
    expect.assertions(2);

    expect(maxSequence([])).toBe(0);
    expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
});
