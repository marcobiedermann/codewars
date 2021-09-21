import Person from '.';

describe('person', () => {
  it('should return its name', () => {
    expect.assertions(1);

    const person = new Person('Jack');

    expect(person.name).toStrictEqual('Jack');
  });

  it('should greet that person', () => {
    expect.assertions(1);

    const person = new Person('Jack');

    expect(person.greet('Jill')).toStrictEqual('Hello Jill, my name is Jack');
  });
});
