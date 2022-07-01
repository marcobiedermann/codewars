import { expect } from 'vitest';
import repeatIt from '.';

describe('repeatIt', () => {
  it('should repeat string `n` times', () => {
    expect(repeatIt('*', 3)).toBe('***');
    expect(repeatIt('Hello', 11)).toBe('HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello');
    expect(repeatIt(1234, 5)).toBe('Not a string');
  });
});
