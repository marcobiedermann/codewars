import { expect } from 'vitest';
import findMissingLetter from '.';

describe('findMissingLetter', () => {
  it('should find the missing letter', () => {
    expect(findMissingLetter(['a', 'b', 'c', 'd', 'f'])).toBe('e');
    expect(findMissingLetter(['O', 'Q', 'R', 'S'])).toBe('P');
    expect(findMissingLetter(['z'])).toBeUndefined();
  });
});
