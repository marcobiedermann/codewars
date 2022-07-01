/* eslint-disable no-underscore-dangle */

import Person from '.';

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

      expect(person._friends).toStrictEqual(people[i]);
    }
  });
});
