import { describe, expect, it } from 'vitest';
import removeUrlAnchor from '.';

describe('removeUrlAnchor', () => {
  it('should remove fragment from URL', () => {
    expect.assertions(1);

    expect(removeUrlAnchor('www.codewars.com#about')).toBe('www.codewars.com');
  });
});
