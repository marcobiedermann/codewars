import otherAngle from '.';

describe('otherAngle', () => {
  it('should return third angle of triangle', () => {
    expect.assertions(4);

    expect(otherAngle(30, 60)).toStrictEqual(90);
    expect(otherAngle(60, 60)).toStrictEqual(60);
    expect(otherAngle(43, 78)).toStrictEqual(59);
    expect(otherAngle(10, 20)).toStrictEqual(150);
  });
});
