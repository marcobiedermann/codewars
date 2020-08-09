import oddOrEven from '.';

describe('oddOrEven', () => {
  it('edge tests', () => {
    expect.assertions(3);

    expect(oddOrEven([0])).toStrictEqual('even');
    expect(oddOrEven([1])).toStrictEqual('odd');
    expect(oddOrEven([])).toStrictEqual('even');
  });

  it('even tests', () => {
    expect.assertions(3);

    expect(oddOrEven([0, 1, 5])).toStrictEqual('even');
    expect(oddOrEven([0, 1, 3])).toStrictEqual('even');
    expect(oddOrEven([1023, 1, 2])).toStrictEqual('even');
  });

  it('negative Even tests', () => {
    expect.assertions(3);

    expect(oddOrEven([0, -1, -5])).toStrictEqual('even');
    expect(oddOrEven([0, -1, -3])).toStrictEqual('even');
    expect(oddOrEven([-1023, 1, -2])).toStrictEqual('even');
  });

  it('odd tests', () => {
    expect.assertions(3);

    expect(oddOrEven([0, 1, 2])).toStrictEqual('odd');
    expect(oddOrEven([0, 1, 4])).toStrictEqual('odd');
    expect(oddOrEven([1023, 1, 3])).toStrictEqual('odd');
  });

  it('negative Odd tests', () => {
    expect.assertions(3);

    expect(oddOrEven([0, -1, 2])).toStrictEqual('odd');
    expect(oddOrEven([0, 1, -4])).toStrictEqual('odd');
    expect(oddOrEven([-1023, -1, 3])).toStrictEqual('odd');
  });
});
