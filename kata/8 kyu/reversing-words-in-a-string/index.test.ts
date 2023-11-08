import { describe, expect, it } from 'vitest';
import reverse from '.';

describe('reverse', () => {
  it('should reverse words in string', () => {
    expect.assertions(5);

    expect(reverse('I am an expert at this')).toBe('this at expert an am I');
    expect(reverse('This is so easy')).toBe('easy so is This');
    expect(reverse('no one cares')).toBe('cares one no');
    expect(reverse('')).toBe('');
    expect(reverse('CodeWars')).toBe('CodeWars');
  });
});
