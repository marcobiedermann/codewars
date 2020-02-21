import maskify from '.';

describe('maskify', () => {
  it('should change all but last four characters into `#`', () => {
    expect(maskify('4556364607935616')).toEqual('############5616');
    expect(maskify('1')).toEqual('1');
    expect(maskify('11111')).toEqual('#1111');
  });
});
