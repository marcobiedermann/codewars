import rot13 from '.';

describe('rot13', () => {
  it('should rotate letters in string', () => {
    expect.assertions(2);

    expect(rot13('test')).toStrictEqual('grfg');
    expect(rot13('Test')).toStrictEqual('Grfg');
  });
});
