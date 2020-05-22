import getPlanetName from '.';

describe('getPlanetName', () => {
  it('should return planet name by ID', () => {
    expect.assertions(3);

    expect(getPlanetName(2)).toStrictEqual('Venus');
    expect(getPlanetName(5)).toStrictEqual('Jupiter');
    expect(getPlanetName(3)).toStrictEqual('Earth');
  });
});
