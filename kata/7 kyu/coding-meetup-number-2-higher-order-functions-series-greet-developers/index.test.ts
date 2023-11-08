import { describe, expect, it } from 'vitest';
import greetDevelopers from '.';

describe('greetDevelopers', () => {
  it('should return a new list of developers where each having a new property `greeting`', () => {
    expect.assertions(1);

    expect(
      greetDevelopers([
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
    ).toStrictEqual([
      {
        firstName: 'Sofia',
        lastName: 'I.',
        country: 'Argentina',
        continent: 'Americas',
        age: 35,
        language: 'Java',
        greeting: 'Hi Sofia, what do you like the most about Java?',
      },
      {
        firstName: 'Lukas',
        lastName: 'X.',
        country: 'Croatia',
        continent: 'Europe',
        age: 35,
        language: 'Python',
        greeting: 'Hi Lukas, what do you like the most about Python?',
      },
      {
        firstName: 'Madison',
        lastName: 'U.',
        country: 'United States',
        continent: 'Americas',
        age: 32,
        language: 'Ruby',
        greeting: 'Hi Madison, what do you like the most about Ruby?',
      },
    ]);
  });
});
