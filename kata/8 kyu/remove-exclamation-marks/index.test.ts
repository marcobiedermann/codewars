import { describe, expect, it } from 'vitest';
import removeExclamationMarks from './index.ts';

describe('removeExclamationMarks', () => {
  it('should remove exclamation marks from string', () => {
    expect.assertions(1);

    expect(removeExclamationMarks('Hello World!')).toBe('Hello World');
  });
});
