import { describe, expect, it } from 'vitest';
import toWeirdCase from '.';

describe('toWeirdCase', () => {
  it('should return the correct value for a single word', () => {
    expect.assertions(2);

    expect(toWeirdCase('This')).toBe('ThIs');
    expect(toWeirdCase('is')).toBe('Is');
  });

  it('should return the correct value for multiple words', () => {
    expect.assertions(1);

    expect(toWeirdCase('This is a test')).toBe('ThIs Is A TeSt');
  });
});
