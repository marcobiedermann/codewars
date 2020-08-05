import goodVsEvil from '.';

describe('expect', () => {
  it('should return winning side', () => {
    expect.assertions(3);

    expect(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')).toStrictEqual(
      'Battle Result: Evil eradicates all trace of Good',
    );
    expect(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')).toStrictEqual(
      'Battle Result: Good triumphs over Evil',
    );
    expect(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')).toStrictEqual(
      'Battle Result: No victor on this battle field',
    );
  });
});
