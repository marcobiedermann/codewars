import { describe, expect, it } from 'vitest';
import findMissingLetter from './index.ts';

describe('findMissingLetter', () => {
  it('should find the missing letter', () => {
    expect.assertions(3);

    expect(findMissingLetter(['a', 'b', 'c', 'd', 'f'])).toBe('e');
    expect(findMissingLetter(['O', 'Q', 'R', 'S'])).toBe('P');
    expect(findMissingLetter(['z'])).toBeUndefined();
  });
});
