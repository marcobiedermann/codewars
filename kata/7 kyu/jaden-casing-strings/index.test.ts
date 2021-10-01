import toJadenCase from '.';

describe('toJadenCase', () => {
  it('should transform string', () => {
    expect.assertions(1);

    expect(toJadenCase("How can mirrors be real if our eyes aren't real")).toBe(
      "How Can Mirrors Be Real If Our Eyes Aren't Real",
    );
  });
});
