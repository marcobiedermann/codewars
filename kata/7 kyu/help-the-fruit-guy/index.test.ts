import { describe, expect, it } from 'vitest';
import removeRotten from '.';

describe('removeRotten', () => {
  it('should remove all rotten fruits', () => {
    expect.assertions(4);

    expect(removeRotten(['apple', 'banana', 'kiwi', 'melone', 'orange'])).toStrictEqual([
      'apple',
      'banana',
      'kiwi',
      'melone',
      'orange',
    ]);
    expect(removeRotten([])).toStrictEqual([]);
    expect(removeRotten(null)).toStrictEqual([]);
    expect(removeRotten(['apple', 'rottenBanana', 'apple'])).toStrictEqual([
      'apple',
      'banana',
      'apple',
    ]);
  });
});
