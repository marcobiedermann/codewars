import strCount from '.';

describe('strCount', () => {
  it('should count occurrences of letter in word', () => {
    expect.assertions(3);

    expect(strCount('Hello', 'o')).toStrictEqual(1);
    expect(strCount('Hello', 'l')).toStrictEqual(2);
    expect(strCount('', 'z')).toStrictEqual(0);
  });
});
