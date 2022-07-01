import number from '.';

describe('number', () => {
  it('should prepend lines by line number', () => {
    expect(number([])).toStrictEqual([]);
    expect(number(['a', 'b', 'c'])).toStrictEqual(['1: a', '2: b', '3: c']);
  });
});
