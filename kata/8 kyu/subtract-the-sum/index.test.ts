import SubtractSum from '.';

describe('subtractSum', () => {
  it('should subtract the sum', () => {
    expect.assertions(1);

    expect(SubtractSum(10)).toStrictEqual('apple');
  });
});
