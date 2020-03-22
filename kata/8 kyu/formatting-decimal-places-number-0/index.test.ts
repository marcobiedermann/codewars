import twoDecimalPlaces from '.';

describe('twoDecimalPlaces', () => {
  it('should round number to two decimal places', () => {
    expect.assertions(3);

    expect(twoDecimalPlaces(4.659725356)).toStrictEqual(4.66);
    expect(twoDecimalPlaces(173735326.3783732637948948)).toStrictEqual(173735326.38);
    expect(twoDecimalPlaces(4.653725356)).toStrictEqual(4.65);
  });
});
