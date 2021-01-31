import iqTest from '.';

describe('iqTest', () => {
  it('should return position of different number in string', () => {
    expect.assertions(3);

    expect(iqTest('2 4 7 8 10')).toStrictEqual(3);
    expect(iqTest('1 2 2')).toStrictEqual(1);
    expect(iqTest('5 3 2')).toStrictEqual(3);
  });
});
