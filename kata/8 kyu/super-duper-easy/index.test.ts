import problem from '.';

describe('problem', () => {
  it('should return value multiplied by 50 and increased by 6', () => {
    expect.assertions(10);

    expect(problem('hello')).toBe('Error');
    expect(problem(1)).toBe(56);
    expect(problem(5)).toBe(256);
    expect(problem(0)).toBe(6);
    expect(problem(1.2)).toBe(66);
    expect(problem(3)).toBe(156);
    expect(problem('RyanIsCool')).toBe('Error');
    expect(problem(-3)).toStrictEqual(-144);
    expect(problem('')).toBe('Error');
    expect(problem(0.03)).toBe(7.5);
  });
});
