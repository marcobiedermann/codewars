import booleanToString from '.';

describe('booleanToString', () => {
  it('should convert boolean to string', () => {
    expect.assertions(2);

    expect(booleanToString(true)).toBe('true');
    expect(booleanToString(false)).toBe('false');
  });
});
