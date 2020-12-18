import slope from '.';

describe('slope', () => {
  it('should return string represenation of slope', () => {
    expect.assertions(6);

    expect(slope([19, 3, 20, 3])).toStrictEqual('0');
    expect(slope([2, 7, 4, -7])).toStrictEqual('-7');
    expect(slope([10, 50, 30, 150])).toStrictEqual('5');
    expect(slope([15, 45, 12, 60])).toStrictEqual('-5');
    expect(slope([10, 20, 20, 80])).toStrictEqual('6');
    expect(slope([-10, 6, -10, 3])).toStrictEqual('undefined');
  });
});
