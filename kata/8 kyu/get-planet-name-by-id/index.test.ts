import getPlanetName from '.';

describe('getPlanetName', () => {
  it('should return planet name by ID', () => {
    expect.assertions(9);

    expect(getPlanetName(0)).toStrictEqual('ID does not match');
    expect(getPlanetName(1)).toStrictEqual('Mercury');
    expect(getPlanetName(2)).toStrictEqual('Venus');
    expect(getPlanetName(3)).toStrictEqual('Earth');
    expect(getPlanetName(4)).toStrictEqual('Mars');
    expect(getPlanetName(5)).toStrictEqual('Jupiter');
    expect(getPlanetName(6)).toStrictEqual('Saturn');
    expect(getPlanetName(7)).toStrictEqual('Uranus');
    expect(getPlanetName(8)).toStrictEqual('Neptune');
  });
});
