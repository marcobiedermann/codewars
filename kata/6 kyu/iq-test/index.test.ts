import iqTest from '.';

describe('iqTest', () => {
  it('should return position of different number in string', () => {
    expect(iqTest('2 4 7 8 10')).toBe(3);
    expect(iqTest('1 2 2')).toBe(1);
    expect(iqTest('5 3 2')).toBe(3);
  });
});
