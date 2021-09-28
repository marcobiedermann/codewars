import caffeineBuzz from '.';

describe('caffeineBuzz', () => {
  it('should return caffein script', () => {
    expect.assertions(4);

    expect(caffeineBuzz(1)).toStrictEqual('mocha_missing!');
    expect(caffeineBuzz(3)).toStrictEqual('Java');
    expect(caffeineBuzz(6)).toStrictEqual('JavaScript');
    expect(caffeineBuzz(12)).toStrictEqual('CoffeeScript');
  });
});
