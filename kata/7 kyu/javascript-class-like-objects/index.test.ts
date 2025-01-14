import { describe, expect, it } from 'vitest';
import Animal from './index.ts';

describe('animal', () => {
  it('should create a class like object called `Animal`', () => {
    expect.assertions(4);

    const dog = new Animal('Max', 'dog');

    expect(dog.toString()).toBe('Max is a dog');
    expect(dog.type).toBe('dog');
    expect(dog.name).toBe('Max');

    dog.name = 'Lassie';
    expect(dog.name).toBe('Lassie');
  });
});
