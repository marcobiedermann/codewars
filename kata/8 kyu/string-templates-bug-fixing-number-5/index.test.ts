import { describe, expect, it } from 'vitest';
import buildString from './index.ts';

describe('buildString', () => {
  it('should join items in string', () => {
    expect.assertions(3);

    expect(buildString('Cheese', 'Milk', 'Chocolate')).toBe('I like Cheese, Milk, Chocolate!');
    expect(buildString('Cheese', 'Milk')).toBe('I like Cheese, Milk!');
    expect(buildString('Chocolate')).toBe('I like Chocolate!');
  });
});
