import printerError from '.';

describe('printerError', () => {
  it('should print number of errors', () => {
    expect.assertions(1);

    expect(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')).toStrictEqual(
      '3/56',
    );
  });
});
