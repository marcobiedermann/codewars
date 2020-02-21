import iqTest from '.';

describe('iqTest', () => {
  it('should return position of different number in string', () => {
    expect(iqTest('2 4 7 8 10')).toEqual(3);
    expect(iqTest('1 2 2')).toEqual(1);
  });
});
