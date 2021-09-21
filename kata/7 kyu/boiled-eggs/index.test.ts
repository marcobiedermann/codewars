import cookingTime from '.';

describe('cookingTime', () => {
  it('should calculate the cooking time', () => {
    expect.assertions(3);

    expect(cookingTime(0)).toStrictEqual(0);
    expect(cookingTime(5)).toStrictEqual(5);
    expect(cookingTime(10)).toStrictEqual(10);
  });
});
