import angle from '.';

describe('angle', () => {
  it('should get inner sum of angles in n-sided polygon', () => {
    expect.assertions(2);

    expect(angle(3)).toStrictEqual(180);
    expect(angle(4)).toStrictEqual(360);
  });
});
