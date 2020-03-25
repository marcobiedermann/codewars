import towerBuilder from '.';

describe('towerBuilder', () => {
  it('should build tower', () => {
    expect.assertions(3);

    expect(towerBuilder(1)).toStrictEqual(['*']);
    expect(towerBuilder(2)).toStrictEqual([' * ', '***']);
    expect(towerBuilder(3)).toStrictEqual(['  *  ', ' *** ', '*****']);
  });
});
