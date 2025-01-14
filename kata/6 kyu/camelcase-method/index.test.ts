import { describe, expect, it } from 'vitest';
import camelCase from './index.ts';

describe('camelCase', () => {
  it('should camelcase each word in sentence', () => {
    expect.assertions(5);

    expect(camelCase('test case')).toBe('TestCase');
    expect(camelCase('camel case method')).toBe('CamelCaseMethod');
    expect(camelCase('say hello ')).toBe('SayHello');
    expect(camelCase(' camel case word')).toBe('CamelCaseWord');
    expect(camelCase('')).toBe('');
  });
});
