import min from '.';

describe('min', () => {
  it('should return the smallest value or index of an array', () => {
    expect.assertions(2);

    expect(min([1, 2, 3, 4, 5], 'value')).toBe(1);
    expect(min([1, 2, 3, 4, 5], 'index')).toBe(0);
  });
});
