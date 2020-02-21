import iqTest from '.';

describe('iqTest', () => {
  it('should return position of different number in string', () => {
    expect.assertions(2);

    expect(iqTest('2 4 7 8 10')).toStrictEqual(3);
    expect(iqTest('1 2 2')).toStrictEqual(1);
  });
});
