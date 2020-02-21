import reverseWords from '.';

describe('reverseWords', () => {
  it('should reverse words in string', () => {
    expect.assertions(5);

    expect(reverseWords('hello world!')).toStrictEqual('world! hello');
    expect(reverseWords("yoda doesn't speak like this")).toStrictEqual(
      "this like speak doesn't yoda",
    );
    expect(reverseWords('foobar')).toStrictEqual('foobar');
    expect(reverseWords('kata editor')).toStrictEqual('editor kata');
    expect(reverseWords('row row row your boat')).toStrictEqual('boat your row row row');
  });
});
