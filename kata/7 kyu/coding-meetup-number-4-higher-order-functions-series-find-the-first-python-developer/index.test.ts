import { describe, expect, it } from 'vitest';
import getFirstPython from '.';

describe('getFirstPython', () => {
  it('should find the first Python developer', () => {
    expect.assertions(2);

    expect(
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
    ).toBe('Victoria, Puerto Rico');
    expect(
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
    ).toBe('There will be no Python developers');
  });
});
