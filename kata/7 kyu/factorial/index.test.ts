import factorial from '.';

describe('factorial', () => {
  it('should return factorial', () => {
    expect.assertions(4);

    expect(factorial(0)).toStrictEqual(1);
    expect(factorial(1)).toStrictEqual(1);
    expect(factorial(2)).toStrictEqual(2);
    expect(factorial(3)).toStrictEqual(6);
  });
});
