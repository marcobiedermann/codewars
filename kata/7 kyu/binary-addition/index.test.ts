import addBinary from '.';

describe('addBinary', () => {
  const results1 = addBinary(1, 2);

  it("should return something that isn't falsy", () => {
    expect.assertions(1);

    expect(typeof results1).toStrictEqual('string');
  });

  it('should return "11"', () => {
    expect.assertions(1);

    expect(results1).toStrictEqual('11');
  });
});
