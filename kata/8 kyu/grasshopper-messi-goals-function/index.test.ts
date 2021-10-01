import goals from '.';

describe('goals', () => {
  it('should sum number of arguments', () => {
    expect.assertions(2);

    expect(goals(0, 0, 0)).toBe(0);
    expect(goals(43, 10, 5)).toBe(58);
  });
});
