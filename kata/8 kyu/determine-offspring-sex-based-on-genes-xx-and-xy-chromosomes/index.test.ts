import { describe, expect, it } from 'vitest';
import chromosomeCheck from './index.ts';

describe('chromosomeCheck', () => {
  it('should determin the sex of the offspring', () => {
    expect.assertions(2);

    expect(chromosomeCheck('XY')).toBe("Congratulations! You're going to have a son.");
    expect(chromosomeCheck('XX')).toBe("Congratulations! You're going to have a daughter.");
  });
});
