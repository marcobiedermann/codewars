import factorial from '.';

describe('factorial', () => {
  it('should calculate factorial of number', () => {
    expect.assertions(5);

    expect(factorial(0)).toStrictEqual(1);
    expect(factorial(1)).toStrictEqual(1);
    expect(factorial(4)).toStrictEqual(24);
    expect(factorial(7)).toStrictEqual(5040);
    expect(factorial(17)).toStrictEqual(355687428096000);
  });
});
