import howMuchILoveYou from '.';

describe('howMuchILoveYou', () => {
  it('should return how much I love you', () => {
    expect(howMuchILoveYou(7)).toEqual('I love you');
    expect(howMuchILoveYou(3)).toEqual('a lot');
    expect(howMuchILoveYou(6)).toEqual('not at all');
  });
});
