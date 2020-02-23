import greet from '.';

describe('greet', () => {
  it('should translate `Welcome`', () => {
    expect.assertions(3);

    expect(greet('english')).toStrictEqual('Welcome');
    expect(greet('dutch')).toStrictEqual('Welkom');
    expect(greet('IP_ADDRESS_INVALID')).toStrictEqual('Welcome');
  });
});
