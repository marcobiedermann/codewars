import remove from '.';

describe('remove', () => {
  it('should remove n amount of exclamatin marks', () => {
    expect(remove('Hi!', 1)).toBe('Hi');
    expect(remove('Hi!', 100)).toBe('Hi');
    expect(remove('Hi!!!', 1)).toBe('Hi!!');
    expect(remove('Hi!!!', 100)).toBe('Hi');
    expect(remove('!Hi', 1)).toBe('Hi');
    expect(remove('!Hi!', 1)).toBe('Hi!');
    expect(remove('!Hi!', 100)).toBe('Hi');
    expect(remove('!!!Hi !!hi!!! !hi', 1)).toBe('!!Hi !!hi!!! !hi');
    expect(remove('!!!Hi !!hi!!! !hi', 3)).toBe('Hi !!hi!!! !hi');
    expect(remove('!!!Hi !!hi!!! !hi', 5)).toBe('Hi hi!!! !hi');
    expect(remove('!!!Hi !!hi!!! !hi', 100)).toBe('Hi hi hi');
  });
});
