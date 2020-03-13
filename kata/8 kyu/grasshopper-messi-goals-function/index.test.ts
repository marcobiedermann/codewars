import goals from '.';

describe('goals', () => {
  it('should sum number of arguments', () => {
    expect.assertions(2);

    expect(goals(0, 0, 0)).toStrictEqual(0);
    expect(goals(43, 10, 5)).toStrictEqual(58);
  });
});
