import findLongest from '.';

describe('findLongest', () => {
  it('should find number with most digist', () => {
    expect.assertions(3);

    expect(findLongest([1, 10, 100])).toStrictEqual(100);
    expect(findLongest([9000, 8, 800])).toStrictEqual(9000);
    expect(findLongest([8, 900, 500])).toStrictEqual(900);
  });
});
