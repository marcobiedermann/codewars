import { describe, expect, it } from 'vitest';
import Person from './index.ts';

describe('person', () => {
  it('should return its name', () => {
    expect.assertions(1);

    const person = new Person('Jack');

    expect(person.name).toBe('Jack');
  });

  it('should greet that person', () => {
    expect.assertions(1);

    const person = new Person('Jack');

    expect(person.greet('Jill')).toBe('Hello Jill, my name is Jack');
  });
});
