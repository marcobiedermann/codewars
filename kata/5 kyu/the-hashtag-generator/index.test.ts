import generateHashtag from '.';

describe('generateHashtag', () => {
  it('should generate a hashtag', () => {
    expect.assertions(10);

    expect(generateHashtag('')).toStrictEqual(false);
    expect(generateHashtag(' '.repeat(200))).toStrictEqual(false);
    expect(generateHashtag('Do We have A Hashtag')).toStrictEqual('#DoWeHaveAHashtag');
    expect(generateHashtag('Codewars')).toStrictEqual('#Codewars');
    expect(generateHashtag('Codewars Is Nice')).toStrictEqual('#CodewarsIsNice');
    expect(generateHashtag('Codewars is nice')).toStrictEqual('#CodewarsIsNice');
    expect(generateHashtag(`code${' '.repeat(140)}wars`)).toStrictEqual('#CodeWars');
    expect(
      generateHashtag(
        'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat',
      ),
    ).toStrictEqual(false);
    expect(generateHashtag('a'.repeat(139))).toStrictEqual(`#A${'a'.repeat(138)}`);
    expect(generateHashtag('a'.repeat(140))).toStrictEqual(false);
  });
});
