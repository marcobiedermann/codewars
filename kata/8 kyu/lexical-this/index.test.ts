/* eslint-disable no-underscore-dangle */

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Person from './index.ts';

describe('person', () => {
  it('should fill fields', () => {
    const people = [
      ['bob', 'john'],
      ['bob', 'john', 'dave'],
      [],
      ['bob', 'john', 'dave', 'matt', 'alex'],
    ];

    for (let i = 0; i < 4; i += 1) {
      const person = Person();

      person.fillFriends(people[i]);

      assert.strictEqual(person._friends, people[i]);
    }
  });
});
