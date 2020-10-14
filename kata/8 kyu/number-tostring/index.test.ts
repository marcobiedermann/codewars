import a from '.';

describe('a', () => {
  it('should convert number to string', () => {
    expect.assertions(1);

    expect(a).toStrictEqual('123');
  });
});
