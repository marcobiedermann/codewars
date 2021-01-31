import shark from '.';

describe('shark', () => {
  it('should return "Alive!" if you make it, if not, return "Shark Bait!".', () => {
    expect.assertions(4);

    expect(shark(12, 50, 4, 8, true)).toStrictEqual('Alive!');
    expect(shark(7, 55, 4, 16, true)).toStrictEqual('Alive!');
    expect(shark(24, 0, 4, 8, true)).toStrictEqual('Shark Bait!');
    expect(shark(24, 0, 4, 8, false)).toStrictEqual('Shark Bait!');
  });
});
