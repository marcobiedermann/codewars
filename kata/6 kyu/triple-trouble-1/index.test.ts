import tripledouble from '.';

describe('tripledouble', () => {
  it('should check for triple and double', () => {
    expect.assertions(6);

    expect(tripledouble(451999277, 41177722899)).toBe(1);
    expect(tripledouble(1222345, 12345)).toBe(0);
    expect(tripledouble(12345, 12345)).toBe(0);
    expect(tripledouble(666789, 12345667)).toBe(1);
    expect(tripledouble(10560002, 100)).toBe(1);
    expect(tripledouble(1112, 122)).toBe(0);
  });
});
