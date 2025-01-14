import { describe, expect, it } from 'vitest';
import questions from './index.ts';

describe('questions', () => {
  it('should add a new property to every object in the array', () => {
    expect.assertions(1);

    expect(questions[0].usersAnswer).toBeNull();
  });
});
