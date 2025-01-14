import { describe, expect, it } from 'vitest';
import addBinary from './index.ts';

describe('addBinary', () => {
  const results1 = addBinary(1, 2);

  it("should return something that isn't falsy", () => {
    expect.assertions(1);

    expect(typeof results1).toBe('string');
  });

  it('should return "11"', () => {
    expect.assertions(1);

    expect(results1).toBe('11');
  });
});
