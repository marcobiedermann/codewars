import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Person from './index.ts';

describe('person', () => {
  it('should return its name', () => {
    const person = new Person('Jack');

    assert.strictEqual(person.name, 'Jack');
  });

  it('should greet that person', () => {
    const person = new Person('Jack');

    assert.strictEqual(person.greet('Jill'), 'Hello Jill, my name is Jack');
  });
});
