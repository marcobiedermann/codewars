import howManyLightsabersDoYouOwn from '.';

describe('howManyLightsabersDoYouOwn', () => {
  it('should return number of lightsabers', () => {
    expect.assertions(3);

    expect(howManyLightsabersDoYouOwn()).toBe(0);
    expect(howManyLightsabersDoYouOwn('Adam')).toBe(0);
    expect(howManyLightsabersDoYouOwn('Zach')).toBe(18);
  });
});
