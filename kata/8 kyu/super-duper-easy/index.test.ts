import problem from '.';

describe('problem', () => {
  it('should return value multiplied by 50 and increased by 6', () => {
    expect.assertions(10);

    expect(problem('hello')).toStrictEqual('Error');
    expect(problem(1)).toStrictEqual(56);
    expect(problem(5)).toStrictEqual(256);
    expect(problem(0)).toStrictEqual(6);
    expect(problem(1.2)).toStrictEqual(66);
    expect(problem(3)).toStrictEqual(156);
    expect(problem('RyanIsCool')).toStrictEqual('Error');
    expect(problem(-3)).toStrictEqual(-144);
    expect(problem('')).toStrictEqual('Error');
    expect(problem(0.03)).toStrictEqual(7.5);
  });
});
