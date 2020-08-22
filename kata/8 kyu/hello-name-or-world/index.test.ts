import hello from '.';

describe('hello', () => {
  it('should return `Hello, world!` or `Hello, name!`', () => {
    expect.assertions(4);

    expect(hello('johN')).toStrictEqual('Hello, John!');
    expect(hello('alice')).toStrictEqual('Hello, Alice!');
    expect(hello()).toStrictEqual('Hello, World!');
    expect(hello('')).toStrictEqual('Hello, World!');
  });
});
