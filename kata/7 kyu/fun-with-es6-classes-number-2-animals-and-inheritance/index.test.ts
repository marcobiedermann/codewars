import { describe, expect, it } from 'vitest';
import { Cat, Dog, Shark } from './index.ts';

describe('the Shark class', () => {
  it('should construct an object properly', () => {
    expect.assertions(12);

    const billy = new Shark('Billy', 3, 'Alive and well');

    expect(billy.name).toBe('Billy');
    expect(billy.age).toBe(3);
    expect(billy.legs).toBe(0);
    expect(billy.species).toBe('shark');
    expect(billy.status).toBe('Alive and well');
    expect(billy.introduce()).toBe('Hello, my name is Billy and I am 3 years old.');

    const charles = new Shark('Charles', 8, 'Finding a mate');

    expect(charles.name).toBe('Charles');
    expect(charles.age).toBe(8);
    expect(charles.legs).toBe(0);
    expect(charles.species).toBe('shark');
    expect(charles.status).toBe('Finding a mate');
    expect(charles.introduce()).toBe('Hello, my name is Charles and I am 8 years old.');
  });
});

describe('the Cat class', () => {
  it('should construct an object properly', () => {
    expect.assertions(12);

    const cathy = new Cat('Cathy', 7, 'Playing with a ball of yarn');

    expect(cathy.name).toBe('Cathy');
    expect(cathy.age).toBe(7);
    expect(cathy.legs).toBe(4);
    expect(cathy.species).toBe('cat');
    expect(cathy.status).toBe('Playing with a ball of yarn');
    expect(cathy.introduce()).toBe('Hello, my name is Cathy and I am 7 years old.  Meow meow!');

    const spitsy = new Cat('Spitsy', 6, 'sleeping');

    expect(spitsy.name).toBe('Spitsy');
    expect(spitsy.age).toBe(6);
    expect(spitsy.legs).toBe(4);
    expect(spitsy.species).toBe('cat');
    expect(spitsy.status).toBe('sleeping');
    expect(spitsy.introduce()).toBe('Hello, my name is Spitsy and I am 6 years old.  Meow meow!');
  });
});

describe('the Dog class', () => {
  it('should construct an object properly', () => {
    expect.assertions(7);

    const doug = new Dog('Doug', 12, 'Serving his master', 'Eliza');

    expect(doug.name).toBe('Doug');
    expect(doug.age).toBe(12);
    expect(doug.legs).toBe(4);
    expect(doug.species).toBe('dog');
    expect(doug.status).toBe('Serving his master');
    expect(doug.introduce()).toBe('Hello, my name is Doug and I am 12 years old.');
    expect(doug.greetMaster()).toBe('Hello Eliza');
  });
});
