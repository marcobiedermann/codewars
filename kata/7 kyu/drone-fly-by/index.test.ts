import flyBy from '.';

describe('flyBy', () => {
  it('should return the resulting `lamps` string', () => {
    expect.assertions(3);

    expect(flyBy('xxxxxx', '====T')).toStrictEqual('ooooox');
    expect(flyBy('xxxxxxxxx', '==T')).toStrictEqual('oooxxxxxx');
    expect(flyBy('xxxxxxxxxxxxxxx', '=========T')).toStrictEqual('ooooooooooxxxxx');
  });
});
