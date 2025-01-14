import { describe, expect, it } from 'vitest';
import capitalizeWord from './index.ts';

describe('capitalizeWord', () => {
  it('should capitalize word', () => {
    expect.assertions(3);

    expect(capitalizeWord('word')).toBe('Word');
    expect(capitalizeWord('i')).toBe('I');
    expect(capitalizeWord('glasswear')).toBe('Glasswear');
  });
});
