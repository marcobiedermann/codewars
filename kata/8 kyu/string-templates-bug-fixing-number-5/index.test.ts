import buildString from '.';

describe('buildString', () => {
  it('should join items in string', () => {
    expect.assertions(3);

    expect(buildString('Cheese', 'Milk', 'Chocolate')).toStrictEqual(
      'I like Cheese, Milk, Chocolate!',
    );
    expect(buildString('Cheese', 'Milk')).toStrictEqual('I like Cheese, Milk!');
    expect(buildString('Chocolate')).toStrictEqual('I like Chocolate!');
  });
});
