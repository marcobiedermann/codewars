import grow from '.';

describe('grow', () => {
  it('should multiply all numbers in list', () => {
    expect(grow([1, 2, 3])).toEqual(6);
    expect(grow([4, 1, 1, 1, 4])).toEqual(16);
    expect(grow([2, 2, 2, 2, 2, 2])).toEqual(64);
  });
});
