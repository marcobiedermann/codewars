import flip from '.';

describe('flip', () => {
  it('should move items to left or right', () => {
    expect.assertions(2);

    expect(flip('R', [3, 2, 1, 2])).toStrictEqual([1, 2, 2, 3]);
    expect(flip('L', [1, 4, 5, 3, 5])).toStrictEqual([5, 5, 4, 3, 1]);
  });
});
