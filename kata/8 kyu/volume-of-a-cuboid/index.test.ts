import Kata from '.';

describe('getVolumeOfCuboid', () => {
  it('should calculate volume of cuboid', () => {
    expect.assertions(2);

    expect(Kata.getVolumeOfCuboid(1, 2, 2)).toBe(4);
    expect(Kata.getVolumeOfCuboid(6.3, 2, 5)).toBe(63);
  });
});
