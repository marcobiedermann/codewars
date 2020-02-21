import fakeBin from '.';

describe('fakeBin', () => {
  it('should replace digits below 5 with `0` and rest by `1`', () => {
    expect(fakeBin('45385593107843568')).toEqual('01011110001100111');
    expect(fakeBin('509321967506747')).toEqual('101000111101101');
    expect(fakeBin('366058562030849490134388085')).toEqual('011011110000101010000011011');
  });
});
