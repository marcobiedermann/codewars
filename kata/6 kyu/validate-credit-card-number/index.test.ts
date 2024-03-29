import { describe, expect, it } from 'vitest';
import validate from '.';

describe('validate', () => {
  it('should validate credit card numbers', () => {
    expect.assertions(5);

    expect(validate(123)).toBe(false);
    expect(validate(1)).toBe(false);
    expect(validate(2121)).toBe(true);
    expect(validate(1230)).toBe(true);
    expect(validate(8675309)).toBe(false);
  });
});
