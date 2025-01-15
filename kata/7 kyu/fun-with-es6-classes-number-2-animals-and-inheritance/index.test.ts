import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { Cat, Dog, Shark } from './index.ts';

describe('the Shark class', () => {
  it('should construct an object properly', () => {
    const billy = new Shark('Billy', 3, 'Alive and well');

    assert.strictEqual(billy.name, 'Billy');
    assert.strictEqual(billy.age, 3);
    assert.strictEqual(billy.legs, 0);
    assert.strictEqual(billy.species, 'shark');
    assert.strictEqual(billy.status, 'Alive and well');
    assert.strictEqual(billy.introduce(), 'Hello, my name is Billy and I am 3 years old.');

    const charles = new Shark('Charles', 8, 'Finding a mate');

    assert.strictEqual(charles.name, 'Charles');
    assert.strictEqual(charles.age, 8);
    assert.strictEqual(charles.legs, 0);
    assert.strictEqual(charles.species, 'shark');
    assert.strictEqual(charles.status, 'Finding a mate');
    assert.strictEqual(charles.introduce(), 'Hello, my name is Charles and I am 8 years old.');
  });
});

describe('the Cat class', () => {
  it('should construct an object properly', () => {
    const cathy = new Cat('Cathy', 7, 'Playing with a ball of yarn');

    assert.strictEqual(cathy.name, 'Cathy');
    assert.strictEqual(cathy.age, 7);
    assert.strictEqual(cathy.legs, 4);
    assert.strictEqual(cathy.species, 'cat');
    assert.strictEqual(cathy.status, 'Playing with a ball of yarn');
    assert.strictEqual(
      cathy.introduce(),
      'Hello, my name is Cathy and I am 7 years old.  Meow meow!',
    );

    const spitsy = new Cat('Spitsy', 6, 'sleeping');

    assert.strictEqual(spitsy.name, 'Spitsy');
    assert.strictEqual(spitsy.age, 6);
    assert.strictEqual(spitsy.legs, 4);
    assert.strictEqual(spitsy.species, 'cat');
    assert.strictEqual(spitsy.status, 'sleeping');
    assert.strictEqual(
      spitsy.introduce(),
      'Hello, my name is Spitsy and I am 6 years old.  Meow meow!',
    );
  });
});

describe('the Dog class', () => {
  it('should construct an object properly', () => {
    const doug = new Dog('Doug', 12, 'Serving his master', 'Eliza');

    assert.strictEqual(doug.name, 'Doug');
    assert.strictEqual(doug.age, 12);
    assert.strictEqual(doug.legs, 4);
    assert.strictEqual(doug.species, 'dog');
    assert.strictEqual(doug.status, 'Serving his master');
    assert.strictEqual(doug.introduce(), 'Hello, my name is Doug and I am 12 years old.');
    assert.strictEqual(doug.greetMaster(), 'Hello Eliza');
  });
});
