import factorial from '.';

describe('factorial', () => {
  it('should return factorial', () => {
    expect.assertions(6);

    expect(factorial(0)).toStrictEqual(1);
    expect(factorial(1)).toStrictEqual(1);
    expect(factorial(2)).toStrictEqual(2);
    expect(factorial(3)).toStrictEqual(6);
    expect(() => factorial(-1)).toThrow(RangeError);
    expect(() => factorial(13)).toThrow(RangeError);
  });
});
