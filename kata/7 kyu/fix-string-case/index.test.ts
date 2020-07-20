import solve from '.';

describe('solve', () => {
  it('should fix string case', () => {
    expect.assertions(4);

    expect(solve('code')).toStrictEqual('code');
    expect(solve('CODe')).toStrictEqual('CODE');
    expect(solve('COde')).toStrictEqual('code');
    expect(solve('Code')).toStrictEqual('code');
  });
});
