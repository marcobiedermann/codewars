import zeros from '.';

describe('zeros', () => {
  it('should count number of trailing zeros in a factorial of a given number', () => {
    expect.assertions(4);

    expect(zeros(0)).toStrictEqual(0);
    expect(zeros(5)).toStrictEqual(1);
    expect(zeros(6)).toStrictEqual(1);
    expect(zeros(30)).toStrictEqual(7);
  });
});
