import shortcut from '.';

describe('shortcut', () => {
  it('should remove all lowercase vowels from string', () => {
    expect.assertions(4);

    expect(shortcut('hello')).toStrictEqual('hll');
    expect(shortcut('how are you today?')).toStrictEqual('hw r y tdy?');
    expect(shortcut('complain')).toStrictEqual('cmpln');
    expect(shortcut('never')).toStrictEqual('nvr');
  });
});
