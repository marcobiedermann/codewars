import { expect } from 'vitest';
import stringToArray from '.';

describe('stringToArray', () => {
  it('should covert string into words', () => {
    expect(stringToArray('Robin Singh')).toStrictEqual(['Robin', 'Singh']);
    expect(stringToArray('I love arrays they are my favorite')).toStrictEqual([
      'I',
      'love',
      'arrays',
      'they',
      'are',
      'my',
      'favorite',
    ]);
  });
});
