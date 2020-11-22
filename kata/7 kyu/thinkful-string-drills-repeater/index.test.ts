import repeater from '.';

describe('repeater', () => {
  it('should repeat string `n` times', () => {
    expect.assertions(3);

    expect(repeater('a', 5)).toStrictEqual('aaaaa');
    expect(repeater('Na', 16)).toStrictEqual('NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa');
    expect(repeater('Wub ', 6)).toStrictEqual('Wub Wub Wub Wub Wub Wub ');
  });
});
