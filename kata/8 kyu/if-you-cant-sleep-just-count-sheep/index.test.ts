import countSheep from '.';

describe('countSheep', () => {
  it('should return string with a murmur', () => {
    expect(countSheep(1)).toBe('1 sheep...');
    expect(countSheep(2)).toBe('1 sheep...2 sheep...');
    expect(countSheep(3)).toBe('1 sheep...2 sheep...3 sheep...');
  });
});
