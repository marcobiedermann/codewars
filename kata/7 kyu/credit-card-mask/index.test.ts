import maskify from '.';

describe('maskify', () => {
  it('should change all but last four characters into `#`', () => {
    expect.assertions(3);

    expect(maskify('4556364607935616')).toStrictEqual('############5616');
    expect(maskify('1')).toStrictEqual('1');
    expect(maskify('11111')).toStrictEqual('#1111');
  });
});
