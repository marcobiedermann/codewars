import enough from '.';

describe('enough', () => {
  it('should return number of non fitting passengers', () => {
    expect.assertions(3);

    expect(enough(10, 5, 5)).toStrictEqual(0);
    expect(enough(100, 60, 50)).toStrictEqual(10);
    expect(enough(20, 5, 5)).toStrictEqual(0);
  });
});
