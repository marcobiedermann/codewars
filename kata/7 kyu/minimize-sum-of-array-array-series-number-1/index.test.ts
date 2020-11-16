import minSum from '.';

describe('minSum', () => {
  it('should find the minimum sum which is obtained from summing each two integers product .', () => {
    expect.assertions(3);

    expect(minSum([5, 4, 2, 3])).toStrictEqual(22);
    expect(minSum([12, 6, 10, 26, 3, 24])).toStrictEqual(342);
    expect(minSum([9, 2, 8, 7, 5, 4, 0, 6])).toStrictEqual(74);
  });
});
