import last from '.';

describe('last', () => {
  it('should get the last element of the given argument(s)', () => {
    expect.assertions(3);

    expect(last([1, 2, 3, 4, 5])).toBe(5);
    expect(last('abcde')).toBe('e');
    expect(last(1, 'b', 3, 'd', 5)).toBe(5);
  });
});
