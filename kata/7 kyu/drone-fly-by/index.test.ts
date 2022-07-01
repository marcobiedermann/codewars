import flyBy from '.';

describe('flyBy', () => {
  it('should return the resulting `lamps` string', () => {
    expect(flyBy('xxxxxx', '====T')).toBe('ooooox');
    expect(flyBy('xxxxxxxxx', '==T')).toBe('oooxxxxxx');
    expect(flyBy('xxxxxxxxxxxxxxx', '=========T')).toBe('ooooooooooxxxxx');
  });
});
