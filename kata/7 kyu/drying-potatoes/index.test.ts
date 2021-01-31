import potatoes from '.';

describe('potatoes', () => {
  it('should return final weight coming out of the oven', () => {
    expect.assertions(2);

    expect(potatoes(82, 127, 80)).toStrictEqual(114);
    expect(potatoes(93, 129, 91)).toStrictEqual(100);
  });
});
