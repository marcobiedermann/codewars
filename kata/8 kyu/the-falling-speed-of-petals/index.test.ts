import sakuraFall from '.';

describe('sakuraFall', () => {
  it('should return time it takes to reach the ground', () => {
    expect.assertions(3);

    expect(sakuraFall(5)).toStrictEqual(80);
    expect(sakuraFall(10)).toStrictEqual(40);
    expect(sakuraFall(-1)).toStrictEqual(0);
  });
});
