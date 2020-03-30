import inArray from '.';

describe('inArray', () => {
  it('should return containing substrings in alphabetical order', () => {
    expect.assertions(3);

    expect(
      inArray(['xyz', 'live', 'strong'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']),
    ).toStrictEqual(['live', 'strong']);
    expect(
      inArray(['live', 'strong', 'arp'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']),
    ).toStrictEqual(['arp', 'live', 'strong']);
    expect(
      inArray(['tarp', 'mice', 'bull'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']),
    ).toStrictEqual([]);
  });
});
