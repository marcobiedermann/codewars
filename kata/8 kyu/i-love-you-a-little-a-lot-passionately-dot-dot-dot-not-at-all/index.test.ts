import { expect } from 'vitest';
import howMuchILoveYou from '.';

describe('howMuchILoveYou', () => {
  it('should return how much I love you', () => {
    expect(howMuchILoveYou(7)).toBe('I love you');
    expect(howMuchILoveYou(3)).toBe('a lot');
    expect(howMuchILoveYou(6)).toBe('not at all');
  });
});
