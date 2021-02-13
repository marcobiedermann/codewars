import howManyLightsabersDoYouOwn from '.';

describe('howManyLightsabersDoYouOwn', () => {
  it('should return number of lightsabers', () => {
    expect.assertions(3);

    expect(howManyLightsabersDoYouOwn()).toStrictEqual(0);
    expect(howManyLightsabersDoYouOwn('Adam')).toStrictEqual(0);
    expect(howManyLightsabersDoYouOwn('Zach')).toStrictEqual(18);
  });
});
