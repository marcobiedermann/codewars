import solution from '.';

describe('solution', () => {
  it('should decode roman number', () => {
    expect.assertions(5);

    expect(solution('XXI')).toStrictEqual(21);
    expect(solution('I')).toStrictEqual(1);
    expect(solution('IV')).toStrictEqual(4);
    expect(solution('MMVIII')).toStrictEqual(2008);
    expect(solution('MDCLXVI')).toStrictEqual(1666);
  });
});
