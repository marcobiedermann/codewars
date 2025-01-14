/* eslint-disable no-underscore-dangle */

import { describe, expect, it } from 'vitest';
import Person from './index.ts';

describe('person', () => {
  it('should fill fields', () => {
    expect.assertions(4);

    const people = [
      ['bob', 'john'],
      ['bob', 'john', 'dave'],
      [],
      ['bob', 'john', 'dave', 'matt', 'alex'],
    ];

    for (let i = 0; i < 4; i += 1) {
      const person = Person();

      person.fillFriends(people[i]);

      expect(person._friends).toStrictEqual(people[i]);
    }
  });
});
