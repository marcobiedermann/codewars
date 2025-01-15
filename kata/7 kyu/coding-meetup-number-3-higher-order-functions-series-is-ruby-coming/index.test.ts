import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isRubyComing from './index.ts';

describe('isRubyComing', () => {
  it('should return true if at least one Ruby developer is in the list of developers', () => {
    assert.strictEqual(
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
      true,
    );
    assert.strictEqual(
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
      false,
    );
  });
});
