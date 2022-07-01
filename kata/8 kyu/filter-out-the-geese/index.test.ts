import gooseFilter from '.';

describe('gooseFilter', () => {
  it('mixed list', () => {
    expect(
      gooseFilter([
        'Mallard',
        'Hook Bill',
        'African',
        'Crested',
        'Pilgrim',
        'Toulouse',
        'Blue Swedish',
      ]),
    ).toStrictEqual(['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish']);
  });

  it('no geese', () => {
    expect(
      gooseFilter(['Mallard', 'Barbary', 'Hook Bill', 'Blue Swedish', 'Crested']),
    ).toStrictEqual(['Mallard', 'Barbary', 'Hook Bill', 'Blue Swedish', 'Crested']);
  });

  it('all geese', () => {
    expect(
      gooseFilter(['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']),
    ).toStrictEqual([]);
  });
});
