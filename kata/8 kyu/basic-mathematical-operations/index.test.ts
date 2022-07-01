import { expect } from 'vitest';
import basicOp from '.';

describe('basicOp', () => {
  it('should perform basic operations', () => {
    expect(basicOp('+', 4, 7)).toBe(11);
    expect(basicOp('-', 15, 18)).toStrictEqual(-3);
    expect(basicOp('*', 5, 5)).toBe(25);
    expect(basicOp('/', 49, 7)).toBe(7);
  });
});
