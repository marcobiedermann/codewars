import { describe, expect, it } from 'vitest';
import whatday from './index.ts';

describe('whatday', () => {
  it('should return the weekday', () => {
    expect.assertions(5);

    expect(whatday(1)).toBe('Sunday');
    expect(whatday(2)).toBe('Monday');
    expect(whatday(3)).toBe('Tuesday');
    expect(whatday(8)).toBe('Wrong, please enter a number between 1 and 7');
    expect(whatday(20)).toBe('Wrong, please enter a number between 1 and 7');
  });
});
