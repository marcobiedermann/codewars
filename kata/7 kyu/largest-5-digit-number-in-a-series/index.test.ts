import solution from '.';

describe('solution', () => {
  it('should return max number with 5 digits in string', () => {
    expect(solution('1234567890')).toEqual(67890);
  });
});
