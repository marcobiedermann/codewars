import rot13 from '.';

describe('rot13', () => {
  it('should rotate letters in string', () => {
    expect(rot13('test')).toBe('grfg');
    expect(rot13('Test')).toBe('Grfg');
  });
});
