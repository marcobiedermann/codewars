import testEven from '.';

describe('testEven', () => {
  it('should check if number is even', () => {
    expect.assertions(5);

    expect(testEven(0)).toStrictEqual(true);
    expect(testEven(0.5)).toStrictEqual(false);
    expect(testEven(1)).toStrictEqual(false);
    expect(testEven(2)).toStrictEqual(true);
    expect(testEven(-4)).toStrictEqual(true);
  });
});
