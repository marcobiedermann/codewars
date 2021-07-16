import sortme from '.';

describe('sortme', () => {
  it('should sort elements in lexicographical order', () => {
    expect.assertions(1);

    expect(sortme(['one', 'two', 'three'])).toStrictEqual(['one', 'three', 'two']);
  });
});
