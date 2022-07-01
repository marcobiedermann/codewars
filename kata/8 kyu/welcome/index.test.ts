import greet from '.';

describe('greet', () => {
  it('should translate `Welcome`', () => {
    expect(greet('english')).toBe('Welcome');
    expect(greet('dutch')).toBe('Welkom');
    expect(greet('IP_ADDRESS_INVALID')).toBe('Welcome');
  });
});
