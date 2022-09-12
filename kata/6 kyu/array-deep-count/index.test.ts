import deepCount from '.';

describe('deepCount', () => {
  it('should count all elements within an array, including inner-level arrays', () => {
    expect.assertions(5);

    expect(deepCount([])).toBe(0);
    expect(deepCount([1, 2, 3])).toBe(3);
    expect(deepCount(['x', 'y', ['z']])).toBe(4);
    expect(deepCount([1, 2, [3, 4, [5]]])).toBe(7);
    expect(deepCount([[[[[[[[[]]]]]]]]])).toBe(8);
  });
});
