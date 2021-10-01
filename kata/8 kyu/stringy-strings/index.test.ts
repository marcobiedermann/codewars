import stringy from '.';

describe('stringy', () => {
  it('should return a string', () => {
    expect.assertions(1);

    expect(typeof stringy(3)).toBe('string');
  });

  it('should start with a 1', () => {
    expect.assertions(1);

    expect(stringy(3)[0]).toBe('1');
  });

  it('should have the correct length', () => {
    expect.assertions(10);

    for (let i = 0; i < 10; i += 1) {
      const parameter = Math.floor(Math.random() * 50 + 1);

      expect(stringy(parameter)).toHaveLength(parameter);
    }
  });
});
