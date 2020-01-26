import addBinary from '.';

describe('addBinary', () => {
  const results1 = addBinary(1, 2);

  it("Should return something that isn't falsy", () => {
    expect(results1).toBeTruthy();
  });

  it('Should return "11"', () => {
    expect(results1).toEqual('11');
  });
});
