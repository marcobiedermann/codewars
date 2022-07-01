import countDevelopers from '.';

describe('countDevelopers', () => {
  it('should return the number of JavaScript developers from Europe', () => {
    expect(
      countDevelopers([
        {
          firstName: 'Noah',
          lastName: 'M.',
          country: 'Switzerland',
          continent: 'Europe',
          age: 19,
          language: 'JavaScript',
        },
        {
          firstName: 'Maia',
          lastName: 'S.',
          country: 'Tahiti',
          continent: 'Oceania',
          age: 28,
          language: 'JavaScript',
        },
        {
          firstName: 'Shufen',
          lastName: 'L.',
          country: 'Taiwan',
          continent: 'Asia',
          age: 35,
          language: 'HTML',
        },
        {
          firstName: 'Sumayah',
          lastName: 'M.',
          country: 'Tajikistan',
          continent: 'Asia',
          age: 30,
          language: 'CSS',
        },
      ]),
    ).toBe(1);
    expect(
      countDevelopers([
        {
          firstName: 'Oliver',
          lastName: 'Q.',
          country: 'Australia',
          continent: 'Oceania',
          age: 19,
          language: 'HTML',
        },
        {
          firstName: 'Lukas',
          lastName: 'R.',
          country: 'Austria',
          continent: 'Europe',
          age: 89,
          language: 'HTML',
        },
      ]),
    ).toBe(0);
  });
});
