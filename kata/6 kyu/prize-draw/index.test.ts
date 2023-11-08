import { describe, expect, it } from 'vitest';
import rank from '.';

describe('rank', () => {
  it('should return the firstname of the participant at rank `n`', () => {
    expect.assertions(4);

    expect(
      rank('Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin', [4, 2, 1, 4, 3, 1, 2], 4),
    ).toBe('Benjamin');
    expect(rank('Lagon,Lily', [1, 5], 2)).toBe('Lagon');
    expect(
      rank('Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin', [4, 2, 1, 4, 3, 1, 2], 8),
    ).toBe('Not enough participants');
    expect(rank('', [4, 2, 1, 4, 3, 1, 2], 6)).toBe('No participants');
  });
});
