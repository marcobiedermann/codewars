import unusualFive from '.';

describe('unusualFive', () => {
  it('should return `5`', () => {
    expect.assertions(1);

    expect(unusualFive()).toStrictEqual(5);
  });
});
