import name from '.';

describe('name', () => {
  it('should concatenate two strings', () => {
    expect.assertions(1);

    expect(name).toStrictEqual('codewa.rs');
  });
});
