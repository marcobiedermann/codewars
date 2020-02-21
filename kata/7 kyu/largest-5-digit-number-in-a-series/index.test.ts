import solution from '.';

describe('solution', () => {
  it('should return max number with 5 digits in string', () => {
    expect.assertions(1);

    expect(solution('1234567890')).toStrictEqual(67890);
  });
});
