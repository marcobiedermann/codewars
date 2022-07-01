import cockroachSpeed from '.';

describe('cockroachSpeed', () => {
  it('should return cm per second', () => {
    expect(cockroachSpeed(1.08)).toBe(30);
    expect(cockroachSpeed(1.09)).toBe(30);
    expect(cockroachSpeed(0)).toBe(0);
  });
});
