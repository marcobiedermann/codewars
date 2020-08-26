import totalGoals from '.';

describe('totalGoals', () => {
  it('should sum the goals Messi scored', () => {
    expect.assertions(1);

    expect(totalGoals).toStrictEqual(58);
  });
});
