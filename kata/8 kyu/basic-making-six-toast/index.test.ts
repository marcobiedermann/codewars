import sixToast from '.';

describe('sixToast', () => {
  it('should count the number of pieces of toast', () => {
    expect.assertions(3);

    expect(sixToast(6)).toBe(0);
    expect(sixToast(17)).toBe(11);
    expect(sixToast(3)).toBe(3);
  });
});
