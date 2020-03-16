import divide from '.';

describe('divide', () => {
  it('should check if number is evenly divisible', () => {
    expect.assertions(10);

    expect(divide(4)).toStrictEqual(true);
    expect(divide(2)).toStrictEqual(false);
    expect(divide(5)).toStrictEqual(false);
    expect(divide(88)).toStrictEqual(true);
    expect(divide(100)).toStrictEqual(true);
    expect(divide(67)).toStrictEqual(false);
    expect(divide(90)).toStrictEqual(true);
    expect(divide(10)).toStrictEqual(true);
    expect(divide(99)).toStrictEqual(false);
    expect(divide(32)).toStrictEqual(true);
  });
});
