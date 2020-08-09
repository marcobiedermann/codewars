import longest from '.';

describe('longest', () => {
  it('should return a new sorted string containing distinct letters', () => {
    expect.assertions(3);

    expect(longest('aretheyhere', 'yestheyarehere')).toStrictEqual('aehrsty');
    expect(longest('loopingisfunbutdangerous', 'lessdangerousthancoding')).toStrictEqual(
      'abcdefghilnoprstu',
    );
    expect(longest('inmanylanguages', 'theresapairoffunctions')).toStrictEqual('acefghilmnoprstuy');
  });
});
