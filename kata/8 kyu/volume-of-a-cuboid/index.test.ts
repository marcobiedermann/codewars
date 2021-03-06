import Kata from '.';

describe('getVolumeOfCuboid', () => {
  it('should calculate volume of cuboid', () => {
    expect.assertions(2);

    expect(Kata.getVolumeOfCuboid(1, 2, 2)).toStrictEqual(4);
    expect(Kata.getVolumeOfCuboid(6.3, 2, 5)).toStrictEqual(63);
  });
});
