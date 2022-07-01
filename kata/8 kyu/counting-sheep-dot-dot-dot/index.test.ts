import countSheeps from '.';

describe('countSheeps', () => {
  it('should count present sheep in array', () => {
    expect(
      countSheeps([
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
      ]),
    ).toBe(17);
  });
});
