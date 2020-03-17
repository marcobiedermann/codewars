import lowercaseCount from '.';

describe('lowercaseCount', () => {
  it('should cound lowercase letters in string', () => {
    expect.assertions(6);

    expect(lowercaseCount('abc')).toStrictEqual(3);
    expect(lowercaseCount('abcABC123')).toStrictEqual(3);
    expect(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")).toStrictEqual(3);
    expect(lowercaseCount('')).toStrictEqual(0);
    expect(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")).toStrictEqual(0);
    expect(lowercaseCount('abcdefghijklmnopqrstuvwxyz')).toStrictEqual(26);
  });
});
