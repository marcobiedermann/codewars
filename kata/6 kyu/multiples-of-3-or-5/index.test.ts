import solution from '.';

describe('solution', () => {
  it('should return the sum of all the multiples of 3 pr 5', () => {
    expect.assertions(1);

    expect(solution(10)).toStrictEqual(23);
  });
});
