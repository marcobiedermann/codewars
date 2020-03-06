import greet from '.';

describe('greet', () => {
  it('should greet boss or guest', () => {
    expect.assertions(2);

    expect(greet('Daniel', 'Daniel')).toStrictEqual('Hello boss');
    expect(greet('Greg', 'Daniel')).toStrictEqual('Hello guest');
  });
});
