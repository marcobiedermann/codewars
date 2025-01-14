import { describe, expect, it } from 'vitest';
import validPhoneNumber from './index.ts';

describe('validPhoneNumber', () => {
  it('should check if phone number is valid', () => {
    expect.assertions(1);

    expect(validPhoneNumber('(123) 456-7890')).toBe(true);
  });
});
