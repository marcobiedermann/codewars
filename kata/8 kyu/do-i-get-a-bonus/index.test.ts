import bonusTime from '.';

describe('bonusTime', () => {
  it('should calculate bonus', () => {
    expect.assertions(7);

    expect(bonusTime(10000, true)).toStrictEqual('£100000');
    expect(bonusTime(25000, true)).toStrictEqual('£250000');
    expect(bonusTime(10000, false)).toStrictEqual('£10000');
    expect(bonusTime(60000, false)).toStrictEqual('£60000');
    expect(bonusTime(2, true)).toStrictEqual('£20');
    expect(bonusTime(78, false)).toStrictEqual('£78');
    expect(bonusTime(67890, true)).toStrictEqual('£678900');
  });
});
