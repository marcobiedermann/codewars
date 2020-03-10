import isUpperCase from '.';

describe('isUpperCase', () => {
  it('should work for the examples provided in the description', () => {
    expect.assertions(7);

    expect(isUpperCase('')).not.toBeUndefined();
    expect(isUpperCase('c')).toStrictEqual(false);
    expect(isUpperCase('C')).toStrictEqual(true);
    expect(isUpperCase('hello I AM DONALD')).toStrictEqual(false);
    expect(isUpperCase('HELLO I AM DONALD')).toStrictEqual(true);
    expect(isUpperCase('ACSKLDFJSgSKLDFJSKLDFJ')).toStrictEqual(false);
    expect(isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ')).toStrictEqual(true);
  });

  it('should also work for a few other basic tests', () => {
    expect.assertions(18);

    expect(isUpperCase('Hello World')).toStrictEqual(false);
    expect(isUpperCase('hello world')).toStrictEqual(false);
    expect(isUpperCase('Hello world')).toStrictEqual(false);
    expect(isUpperCase('hello World')).toStrictEqual(false);
    expect(isUpperCase('HELLO WORLD')).toStrictEqual(true);
    expect(isUpperCase('Bob walks his dog every day.')).toStrictEqual(false);
    expect(isUpperCase('BOB walks his dog every day.')).toStrictEqual(false);
    expect(isUpperCase('BOB WALKS HIS DOG EVERY DAY.')).toStrictEqual(true);
    expect(isUpperCase('BOB WALKs HIS DOG EVERY DAY.')).toStrictEqual(false);
    expect(isUpperCase('#lovewins')).toStrictEqual(false);
    expect(isUpperCase('#Lovewins')).toStrictEqual(false);
    expect(isUpperCase('#loveWins')).toStrictEqual(false);
    expect(isUpperCase('#LoveWins')).toStrictEqual(false);
    expect(isUpperCase('#LOVEWins')).toStrictEqual(false);
    expect(isUpperCase('#LoveWINS')).toStrictEqual(false);
    expect(isUpperCase('#LOVEWINs')).toStrictEqual(false);
    expect(isUpperCase('#lOVEWINS')).toStrictEqual(false);
    expect(isUpperCase('#LOVEWINS')).toStrictEqual(true);
  });
});
