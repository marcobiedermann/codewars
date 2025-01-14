import { describe, expect, it } from 'vitest';
import removeDuplicateWords from './index.ts';

describe('removeDuplicateWords', () => {
  it('should remove duplicate words', () => {
    expect.assertions(1);

    expect(
      removeDuplicateWords(
        'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta',
      ),
    ).toBe('alpha beta gamma delta');
  });
});
