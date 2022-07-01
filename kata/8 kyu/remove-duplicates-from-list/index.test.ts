import distinct from '.';

describe('distinct', () => {
  it('should filter duplicated items', () => {
    expect(distinct([1])).toStrictEqual([1]);
    expect(distinct([1, 2])).toStrictEqual([1, 2]);
    expect(distinct([1, 1, 2])).toStrictEqual([1, 2]);
  });
});
