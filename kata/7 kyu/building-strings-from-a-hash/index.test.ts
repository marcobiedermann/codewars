import solution from '.';

describe('solution', () => {
  it('should stringify object entries', () => {
    expect.assertions(1);

    expect(solution({ a: 1, b: '2' })).toBe('a = 1,b = 2');
  });
});
