import reverseList from '.';

describe('reverseList', () => {
  it('should reverse array', () => {
    expect.assertions(2);

    expect(reverseList([1, 2, 3, 4])).toStrictEqual([4, 3, 2, 1]);
    expect(reverseList([3, 1, 5, 4])).toStrictEqual([4, 5, 1, 3]);
  });
});
