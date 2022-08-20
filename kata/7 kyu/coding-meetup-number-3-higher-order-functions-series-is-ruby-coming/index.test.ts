import isRubyComing from '.';

describe('isRubyComing', () => {
  it('should return true if at least one Ruby developer is in the list of developers', () => {
    expect.assertions(2);

    expect(
      isRubyComing([
        {
          firstName: 'Sofia',
          lastName: 'I.',
          country: 'Argentina',
          continent: 'Americas',
          age: 35,
          language: 'Java',
        },
        {
          firstName: 'Lukas',
          lastName: 'X.',
          country: 'Croatia',
          continent: 'Europe',
          age: 35,
          language: 'Python',
        },
        {
          firstName: 'Madison',
          lastName: 'U.',
          country: 'United States',
          continent: 'Americas',
          age: 32,
          language: 'Ruby',
        },
      ]),
    ).toBe(true);
    expect(
      isRubyComing([
        {
          firstName: 'Sofia',
          lastName: 'I.',
          country: 'Argentina',
          continent: 'Americas',
          age: 35,
          language: 'Java',
        },
        {
          firstName: 'Lukas',
          lastName: 'X.',
          country: 'Croatia',
          continent: 'Europe',
          age: 35,
          language: 'Python',
        },
      ]),
    ).toBe(false);
  });
});
