import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getFirstPython from './index.ts';

describe('getFirstPython', () => {
  it('should find the first Python developer', () => {
    assert.strictEqual(
      getFirstPython([
        {
          firstName: 'Mark',
          lastName: 'G.',
          country: 'Scotland',
          continent: 'Europe',
          age: 22,
          language: 'JavaScript',
        },
        {
          firstName: 'Victoria',
          lastName: 'T.',
          country: 'Puerto Rico',
          continent: 'Americas',
          age: 30,
          language: 'Python',
        },
        {
          firstName: 'Emma',
          lastName: 'B.',
          country: 'Norway',
          continent: 'Europe',
          age: 19,
          language: 'Clojure',
        },
      ]),
      'Victoria, Puerto Rico',
    );
    assert.strictEqual(
      getFirstPython([
        {
          firstName: 'Kseniya',
          lastName: 'T.',
          country: 'Belarus',
          continent: 'Europe',
          age: 29,
          language: 'JavaScript',
        },
        {
          firstName: 'Amar',
          lastName: 'V.',
          country: 'Bosnia and Herzegovina',
          continent: 'Europe',
          age: 32,
          language: 'Ruby',
        },
      ]),
      'There will be no Python developers',
    );
  });
});
