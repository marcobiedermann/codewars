import { expect } from 'vitest';
import toWeirdCase from '.';

describe('toWeirdCase', () => {
  it('should return the correct value for a single word', () => {
    expect(toWeirdCase('This')).toBe('ThIs');
    expect(toWeirdCase('is')).toBe('Is');
  });

  it('should return the correct value for multiple words', () => {
    expect(toWeirdCase('This is a test')).toBe('ThIs Is A TeSt');
  });
});
