import { expect } from 'vitest';
import Person from '.';

describe('person', () => {
  it('should return its name', () => {
    const person = new Person('Jack');

    expect(person.name).toBe('Jack');
  });

  it('should greet that person', () => {
    const person = new Person('Jack');

    expect(person.greet('Jill')).toBe('Hello Jill, my name is Jack');
  });
});
