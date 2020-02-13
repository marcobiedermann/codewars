import number from '.';

describe('number', () => {
  it('should prepend lines by line number', () => {
    expect(number([])).toEqual([]);
    expect(number(['a', 'b', 'c'])).toEqual(['1: a', '2: b', '3: c']);
  });
});
