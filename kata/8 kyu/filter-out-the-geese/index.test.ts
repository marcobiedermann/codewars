import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import gooseFilter from './index.ts';

describe('gooseFilter', () => {
  it('mixed list', () => {
    assert.deepEqual(
      gooseFilter([
        'Mallard',
        'Hook Bill',
        'African',
        'Crested',
        'Pilgrim',
        'Toulouse',
        'Blue Swedish',
      ]),
      ['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish'],
    );
  });

  it('no geese', () => {
    assert.deepEqual(gooseFilter(['Mallard', 'Barbary', 'Hook Bill', 'Blue Swedish', 'Crested']), [
      'Mallard',
      'Barbary',
      'Hook Bill',
      'Blue Swedish',
      'Crested',
    ]);
  });

  it('all geese', () => {
    assert.deepEqual(
      gooseFilter(['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']),
      [],
    );
  });
});
