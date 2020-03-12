import greet from '.';

describe('greet', () => {
  it('should return greeting statement', () => {
    expect.assertions(2);

    expect(greet('Ryan')).toStrictEqual('Hello, Ryan how are you doing today?');
    expect(greet('Shingles')).toStrictEqual('Hello, Shingles how are you doing today?');
  });
});
