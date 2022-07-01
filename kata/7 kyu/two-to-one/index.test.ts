import longest from '.';

describe('longest', () => {
  it('should return a new sorted string containing distinct letters', () => {
    expect(longest('aretheyhere', 'yestheyarehere')).toBe('aehrsty');
    expect(longest('loopingisfunbutdangerous', 'lessdangerousthancoding')).toBe(
      'abcdefghilnoprstu',
    );
    expect(longest('inmanylanguages', 'theresapairoffunctions')).toBe('acefghilmnoprstuy');
  });
});
