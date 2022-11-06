import REGEXP from '.';

describe('regexp', () => {
  it('should validate a password', () => {
    expect.assertions(11);

    expect(REGEXP.test('fjd3IR9')).toBe(true);
    expect(REGEXP.test('ghdfj32')).toBe(false);
    expect(REGEXP.test('DSJKHD23')).toBe(false);
    expect(REGEXP.test('dsF43')).toBe(false);
    expect(REGEXP.test('4fdg5Fj3')).toBe(true);
    expect(REGEXP.test('DHSJdhjsU')).toBe(false);
    expect(REGEXP.test('fjd3IR9.;')).toBe(false);
    expect(REGEXP.test('fjd3  IR9')).toBe(false);
    expect(REGEXP.test('djI38D55')).toBe(true);
    expect(REGEXP.test('djI3_8D55')).toBe(false);
    expect(REGEXP.test('djI38D55@@')).toBe(false);
  });
});
