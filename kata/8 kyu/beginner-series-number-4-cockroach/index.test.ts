import cockroachSpeed from '.';

describe('cockroachSpeed', () => {
  it('should return cm per second', () => {
    expect.assertions(3);

    expect(cockroachSpeed(1.08)).toStrictEqual(30);
    expect(cockroachSpeed(1.09)).toStrictEqual(30);
    expect(cockroachSpeed(0)).toStrictEqual(0);
  });
});
