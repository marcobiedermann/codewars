import greet from '.';

describe('greet', () => {
  it('is it a function?', () => {
    expect(typeof greet).toBe('function');
  });

  it('correct return-value?', () => {
    expect(greet()).toBe('hello world!');
  });
});
