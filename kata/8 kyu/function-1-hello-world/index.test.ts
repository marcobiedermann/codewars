import greet from '.';

describe('greet', () => {
  it('is it a function?', () => {
    expect.assertions(1);

    expect(typeof greet).toStrictEqual('function');
  });

  it('correct return-value?', () => {
    expect.assertions(1);

    expect(greet()).toStrictEqual('hello world!');
  });
});
