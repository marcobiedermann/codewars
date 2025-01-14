import { describe, expect, it } from 'vitest';
import likes from './index.ts';

describe('likes', () => {
  it('should return test of liked people', () => {
    expect.assertions(5);

    expect(likes([])).toBe('no one likes this');
    expect(likes(['Peter'])).toBe('Peter likes this');
    expect(likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this');
    expect(likes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this');
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe('Alex, Jacob and 2 others like this');
  });
});
