import grow from '.';

describe('grow', () => {
  it('should multiply all numbers in list', () => {
    expect.assertions(3);

    expect(grow([1, 2, 3])).toStrictEqual(6);
    expect(grow([4, 1, 1, 1, 4])).toStrictEqual(16);
    expect(grow([2, 2, 2, 2, 2, 2])).toStrictEqual(64);
  });
});
