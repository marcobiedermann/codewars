import { describe, expect, it } from 'vitest';
import gooseFilter from '.';

describe('gooseFilter', () => {
  it('mixed list', () => {
    expect.assertions(1);

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
    expect.assertions(1);

    expect(
      gooseFilter(['Mallard', 'Barbary', 'Hook Bill', 'Blue Swedish', 'Crested']),
    ).toStrictEqual(['Mallard', 'Barbary', 'Hook Bill', 'Blue Swedish', 'Crested']);
  });

  it('all geese', () => {
    expect.assertions(1);

    expect(
      gooseFilter(['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']),
    ).toStrictEqual([]);
  });
});
