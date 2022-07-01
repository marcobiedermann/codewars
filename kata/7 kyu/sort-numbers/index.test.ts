import solution from '.';

describe('solution', () => {
  it('should sort numbers', () => {
    expect(solution([1, 2, 10, 50, 5])).toStrictEqual([1, 2, 5, 10, 50]);
    expect(solution(null)).toStrictEqual([]);
  });
});
