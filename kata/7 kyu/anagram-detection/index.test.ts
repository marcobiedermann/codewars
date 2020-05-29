import isAnagram from '.';

describe('isAnagram', () => {
  it('should check is string is anagram', () => {
    expect.assertions(6);

    expect(isAnagram('foefet', 'toffee')).toStrictEqual(true);
    expect(isAnagram('Buckethead', 'DeathCubeK')).toStrictEqual(true);
    expect(isAnagram('Twoo', 'WooT')).toStrictEqual(true);

    expect(isAnagram('dumble', 'bumble')).toStrictEqual(false);
    expect(isAnagram('ound', 'round')).toStrictEqual(false);
    expect(isAnagram('apple', 'pale')).toStrictEqual(false);
  });
});
