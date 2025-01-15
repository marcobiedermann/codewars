import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Animal from './index.ts';

describe('animal', () => {
  it('should create a class like object called `Animal`', () => {
    const dog = new Animal('Max', 'dog');

    assert.strictEqual(dog.toString(), 'Max is a dog');
    assert.strictEqual(dog.type, 'dog');
    assert.strictEqual(dog.name, 'Max');

    dog.name = 'Lassie';
    assert.strictEqual(dog.name, 'Lassie');
  });
});
