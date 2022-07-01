import { expect } from 'vitest';
import generateHashtag from '.';

describe('generateHashtag', () => {
  it('should generate a hashtag', () => {
    expect(generateHashtag('')).toBe(false);
    expect(generateHashtag(' '.repeat(200))).toBe(false);
    expect(generateHashtag('Do We have A Hashtag')).toBe('#DoWeHaveAHashtag');
    expect(generateHashtag('Codewars')).toBe('#Codewars');
    expect(generateHashtag('Codewars Is Nice')).toBe('#CodewarsIsNice');
    expect(generateHashtag('Codewars is nice')).toBe('#CodewarsIsNice');
    expect(generateHashtag(`code${' '.repeat(140)}wars`)).toBe('#CodeWars');
    expect(
      generateHashtag(
        'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat',
      ),
    ).toBe(false);
    expect(generateHashtag('a'.repeat(139))).toBe(`#A${'a'.repeat(138)}`);
    expect(generateHashtag('a'.repeat(140))).toBe(false);
  });
});
