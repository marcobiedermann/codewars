import maxRot from '.';

describe('maxRot', () => {
  it('should return max rotated value', () => {
    expect(maxRot(38458215)).toBe(85821534);
    expect(maxRot(195881031)).toBe(988103115);
    expect(maxRot(896219342)).toBe(962193428);
    expect(maxRot(69418307)).toBe(94183076);
  });
});
