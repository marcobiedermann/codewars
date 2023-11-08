import { describe, expect, it } from 'vitest';
import songDecoder from '.';

describe('songDecoder', () => {
  it('should remove `WUB` and separate words with space', () => {
    expect.assertions(3);

    expect(songDecoder('AWUBBWUBC')).toBe('A B C');
    expect(songDecoder('AWUBWUBWUBBWUBWUBWUBC')).toBe('A B C');
    expect(songDecoder('WUBAWUBBWUBCWUB')).toBe('A B C');
  });
});
