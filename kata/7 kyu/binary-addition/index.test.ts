import { expect } from 'vitest';
import addBinary from '.';

describe('addBinary', () => {
  const results1 = addBinary(1, 2);

  it("should return something that isn't falsy", () => {
    expect(typeof results1).toBe('string');
  });

  it('should return "11"', () => {
    expect(results1).toBe('11');
  });
});
