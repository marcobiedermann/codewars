import greet from '.';

describe('greet', () => {
  it('Is it a function?', () => {
    expect(typeof greet).toEqual('function');
  });

  it('Correct return-value?', () => {
    expect(greet()).toEqual('hello world!');
  });
});
