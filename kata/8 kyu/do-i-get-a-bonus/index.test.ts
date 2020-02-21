import bonusTime from '.';

describe('bonusTime', () => {
  it('should calculate bonus', () => {
    expect(bonusTime(10000, true)).toEqual('£100000');
    expect(bonusTime(25000, true)).toEqual('£250000');
    expect(bonusTime(10000, false)).toEqual('£10000');
    expect(bonusTime(60000, false)).toEqual('£60000');
    expect(bonusTime(2, true)).toEqual('£20');
    expect(bonusTime(78, false)).toEqual('£78');
    expect(bonusTime(67890, true)).toEqual('£678900');
  });
});
