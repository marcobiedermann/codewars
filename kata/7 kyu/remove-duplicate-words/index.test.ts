import { expect } from 'vitest';
import removeDuplicateWords from '.';

describe('removeDuplicateWords', () => {
  it('should remove duplicate words', () => {
    expect(
      removeDuplicateWords(
        'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta',
      ),
    ).toBe('alpha beta gamma delta');
  });
});
