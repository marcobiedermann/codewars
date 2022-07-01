import songDecoder from '.';

describe('songDecoder', () => {
  it('should remove `WUB` and separate words with space', () => {
    expect(songDecoder('AWUBBWUBC')).toBe('A B C');
    expect(songDecoder('AWUBWUBWUBBWUBWUBWUBC')).toBe('A B C');
    expect(songDecoder('WUBAWUBBWUBCWUB')).toBe('A B C');
  });
});
