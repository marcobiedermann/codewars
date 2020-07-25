import balancedNum from '.';

describe('balancedNum', () => {
  it('check balanced number', () => {
    expect.assertions(5);

    expect(balancedNum(7)).toStrictEqual('Balanced');
    expect(balancedNum(959)).toStrictEqual('Balanced');
    expect(balancedNum(13)).toStrictEqual('Balanced');
    expect(balancedNum(432)).toStrictEqual('Not Balanced');
    expect(balancedNum(424)).toStrictEqual('Balanced');
  });

  it('check Larger number', () => {
    expect.assertions(5);

    expect(balancedNum(1024)).toStrictEqual('Not Balanced');
    expect(balancedNum(66545)).toStrictEqual('Not Balanced');
    expect(balancedNum(295591)).toStrictEqual('Not Balanced');
    expect(balancedNum(1230987)).toStrictEqual('Not Balanced');
    expect(balancedNum(56239814)).toStrictEqual('Balanced');
  });
});
