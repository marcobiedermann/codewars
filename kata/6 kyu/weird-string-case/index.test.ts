import toWeirdCase from '.';

describe('toWeirdCase', () => {
  it('should return the correct value for a single word', () => {
    expect.assertions(2);

    expect(toWeirdCase('This')).toStrictEqual('ThIs');
    expect(toWeirdCase('is')).toStrictEqual('Is');
  });

  it('should return the correct value for multiple words', () => {
    expect.assertions(1);

    expect(toWeirdCase('This is a test')).toStrictEqual('ThIs Is A TeSt');
  });
});
