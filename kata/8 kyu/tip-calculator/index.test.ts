import calculateTip from '.';

describe('calculateTip', () => {
  it('should calculate tip', () => {
    expect.assertions(3);

    expect(calculateTip(20, 'Excellent')).toStrictEqual(4);
    expect(calculateTip(26.95, 'good')).toStrictEqual(3);
    expect(calculateTip(20, 'hi')).toStrictEqual('Rating not recognised');
  });
});
