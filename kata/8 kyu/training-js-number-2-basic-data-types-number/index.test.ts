import { expect } from 'vitest';
import { equal1, equal2, equal3, equal4, equal5 } from '.';

describe('equal', () => {
  it('should equal to 100', () => {
    expect(equal1()).toBe(100);
    expect(equal2()).toBe(100);
    expect(equal3()).toBe(100);
    expect(equal4()).toBe(100);
    expect(equal5()).toBe(100);
  });
});
