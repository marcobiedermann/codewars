import potatoes from '.';

describe('potatoes', () => {
  it('should return final weight coming out of the oven', () => {
    expect.assertions(2);

    expect(potatoes(82, 127, 80)).toBe(114);
    expect(potatoes(93, 129, 91)).toBe(100);
  });
});
