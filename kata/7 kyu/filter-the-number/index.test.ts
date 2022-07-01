import filterString from '.';

describe('filterString', () => {
  it('should extract number from string', () => {
    expect(filterString('123')).toBe(123);
    expect(filterString('a1b2c3')).toBe(123);
    expect(filterString('aa1bb2cc3dd')).toBe(123);
  });
});
