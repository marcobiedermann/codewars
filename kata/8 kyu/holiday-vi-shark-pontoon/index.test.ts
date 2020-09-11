import shark from '.';

describe('shark', () => {
  it('should', () => {
    expect.assertions(3);

    expect(shark(12, 50, 4, 8, true)).toStrictEqual('Alive!');
    expect(shark(7, 55, 4, 16, true)).toStrictEqual('Alive!');
    expect(shark(24, 0, 4, 8, true)).toStrictEqual('Shark Bait!');
  });
});
