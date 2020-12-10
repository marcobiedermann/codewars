import findMissingNumber from '.';

describe('findMissingNumber', () => {
  it('should find missing number in sequence', () => {
    expect.assertions(8);

    expect(findMissingNumber('1 2 3 5')).toStrictEqual(4);
    expect(findMissingNumber('1 3')).toStrictEqual(2);
    expect(findMissingNumber('1 5')).toStrictEqual(2);
    expect(findMissingNumber('')).toStrictEqual(0);
    expect(findMissingNumber('1 2 3 4 5')).toStrictEqual(0);
    expect(findMissingNumber('2 3 4 5')).toStrictEqual(1);
    expect(findMissingNumber('2 6 4 5 3')).toStrictEqual(1);
    expect(findMissingNumber('2 1 4 3 a')).toStrictEqual(1);
  });
});
