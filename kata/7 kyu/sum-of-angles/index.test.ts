import angle from '.';

describe('angle', () => {
  it('should get inner sum of angles in n-sided polygon', () => {
    expect.assertions(2);

    expect(angle(3)).toBe(180);
    expect(angle(4)).toBe(360);
  });
});
