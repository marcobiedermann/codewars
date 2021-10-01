import bonusTime from '.';

describe('bonusTime', () => {
  it('should calculate bonus', () => {
    expect.assertions(7);

    expect(bonusTime(10000, true)).toBe('£100000');
    expect(bonusTime(25000, true)).toBe('£250000');
    expect(bonusTime(10000, false)).toBe('£10000');
    expect(bonusTime(60000, false)).toBe('£60000');
    expect(bonusTime(2, true)).toBe('£20');
    expect(bonusTime(78, false)).toBe('£78');
    expect(bonusTime(67890, true)).toBe('£678900');
  });
});
