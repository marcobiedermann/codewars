import greet from '.';

describe('greet', () => {
  it('should greet boss or guest', () => {
    expect(greet('Daniel', 'Daniel')).toBe('Hello boss');
    expect(greet('Greg', 'Daniel')).toBe('Hello guest');
  });
});
