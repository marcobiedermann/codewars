import SubtractSum from '.';

describe('subtractSum', () => {
  it('should subtract the sum', () => {
    expect.assertions(2);

    expect(SubtractSum(10)).toStrictEqual('apple');
    expect(SubtractSum(325)).toStrictEqual('apple');
  });
});
