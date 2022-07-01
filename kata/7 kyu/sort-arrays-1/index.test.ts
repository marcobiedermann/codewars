import sortme from '.';

describe('sortme', () => {
  it('should sort elements in lexicographical order', () => {
    expect(sortme(['one', 'two', 'three'])).toStrictEqual(['one', 'three', 'two']);
  });
});
