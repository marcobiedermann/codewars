import songDecoder from '.';

describe('songDecoder', () => {
  it('should remove `WUB` and separate words with space', () => {
    expect.assertions(3);

    expect(songDecoder('AWUBBWUBC')).toStrictEqual('A B C');
    expect(songDecoder('AWUBWUBWUBBWUBWUBWUBC')).toStrictEqual('A B C');
    expect(songDecoder('WUBAWUBBWUBCWUB')).toStrictEqual('A B C');
  });
});
