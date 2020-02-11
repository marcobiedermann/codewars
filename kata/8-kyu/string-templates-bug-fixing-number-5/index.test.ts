import buildString from '.';

describe('buildString', () => {
  it('should join items in string', () => {
    expect(buildString('Cheese', 'Milk', 'Chocolate')).toEqual('I like Cheese, Milk, Chocolate!');
    expect(buildString('Cheese', 'Milk')).toEqual('I like Cheese, Milk!');
    expect(buildString('Chocolate')).toEqual('I like Chocolate!');
  });
});
