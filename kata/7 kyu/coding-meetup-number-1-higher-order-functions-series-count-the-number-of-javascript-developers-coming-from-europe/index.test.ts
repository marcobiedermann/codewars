import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import countDevelopers from './index.ts';

describe('countDevelopers', () => {
  it('should return the number of JavaScript developers from Europe', () => {
    assert.strictEqual(
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
      1,
    );
    assert.strictEqual(
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
      0,
    );
  });
});
