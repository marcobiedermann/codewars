import { describe, expect, it } from 'vitest';
import elapsedSeconds from './index.ts';

describe('elapsedSeconds', () => {
  it('should return the number of seconds elapsed between the start and end time', () => {
    expect.assertions(3);

    expect(elapsedSeconds(new Date(2013, 1, 1, 0, 0, 1), new Date(2013, 1, 1, 0, 0, 2))).toBe(1);
    expect(elapsedSeconds(new Date(2013, 1, 1, 0, 0, 1), new Date(2013, 1, 1, 0, 0, 20))).toBe(19);
    expect(elapsedSeconds(new Date(2013, 1, 1, 0, 0, 1), new Date(2013, 1, 1, 0, 1, 20))).toBe(79);
  });
});
