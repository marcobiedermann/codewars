import switchItUp from '.';

describe('switchItUp', () => {
  it('should return number in words', () => {
    expect(switchItUp(1)).toBe('One');
    expect(switchItUp(3)).toBe('Three');
    expect(switchItUp(5)).toBe('Five');
  });
});
