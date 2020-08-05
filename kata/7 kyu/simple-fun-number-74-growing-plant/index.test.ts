import growingPlant from '.';

describe('growingPlant', () => {
  it('should return days needed to reach desired height', () => {
    expect.assertions(2);

    expect(growingPlant(100, 10, 910)).toStrictEqual(10);
    expect(growingPlant(10, 9, 4)).toStrictEqual(1);
  });
});
