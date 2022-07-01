import sumStrings from '.';

describe('sumStrings', () => {
  it('should sum two strings', () => {
    expect(sumStrings('123', '456')).toBe('579');
  });
});
