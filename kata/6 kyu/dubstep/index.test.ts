import songDecoder from '.';

describe('songDecoder', () => {
  it('should remove `WUB` and separate words with space', () => {
    expect(songDecoder('AWUBBWUBC')).toEqual('A B C');
    expect(songDecoder('AWUBWUBWUBBWUBWUBWUBC')).toEqual('A B C');
    expect(songDecoder('WUBAWUBBWUBCWUB')).toEqual('A B C');
  });
});
