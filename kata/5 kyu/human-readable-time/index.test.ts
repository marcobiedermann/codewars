import { describe, expect, it } from 'vitest';
import humanReadable from './index.ts';

describe('humanReadable', () => {
  it('should return the time in a human-readable format', () => {
    expect.assertions(5);

    expect(humanReadable(0)).toBe('00:00:00');
    expect(humanReadable(5)).toBe('00:00:05');
    expect(humanReadable(60)).toBe('00:01:00');
    expect(humanReadable(86399)).toBe('23:59:59');
    expect(humanReadable(359999)).toBe('99:59:59');
  });
});
