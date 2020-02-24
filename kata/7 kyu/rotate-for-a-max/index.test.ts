import maxRot from '.';

describe('maxRot', () => {
  it('should return max rotated value', () => {
    expect.assertions(4);

    expect(maxRot(38458215)).toStrictEqual(85821534);
    expect(maxRot(195881031)).toStrictEqual(988103115);
    expect(maxRot(896219342)).toStrictEqual(962193428);
    expect(maxRot(69418307)).toStrictEqual(94183076);
  });
});
