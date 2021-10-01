import checkAlive from '.';

describe('checkAlive', () => {
  it('should check if user is still alive', () => {
    expect.assertions(2);

    expect(checkAlive(5)).toBe(true);
    expect(checkAlive(0)).toBe(false);
  });
});
