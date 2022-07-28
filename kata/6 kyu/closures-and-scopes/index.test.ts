import createFunctions from '.';

describe('createFunctions', () => {
  it('should return an array of function which return their index', () => {
    expect.assertions(2);

    const callbacks = createFunctions(5);

    expect(callbacks[0]()).toBe(0);
    expect(callbacks[3]()).toBe(3);
  });
});
