import howMuchILoveYou from '.';

describe('howMuchILoveYou', () => {
  it('should return how much I love you', () => {
    expect.assertions(3);

    expect(howMuchILoveYou(7)).toStrictEqual('I love you');
    expect(howMuchILoveYou(3)).toStrictEqual('a lot');
    expect(howMuchILoveYou(6)).toStrictEqual('not at all');
  });
});
