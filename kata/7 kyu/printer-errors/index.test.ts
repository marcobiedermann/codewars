import printerError from '.';

describe('printerError', () => {
  it('should print number of errors', () => {
    expect(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')).toBe('3/56');
  });
});
