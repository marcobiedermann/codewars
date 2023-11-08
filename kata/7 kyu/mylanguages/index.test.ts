import { describe, expect, it } from 'vitest';
import myLanguages from '.';

describe('myLanguages', () => {
  it('should return the list of languages where your test score is at least 60, in descending order', () => {
    expect.assertions(3);

    expect(myLanguages({ Java: 10, Ruby: 80, Python: 65 })).toStrictEqual(['Ruby', 'Python']);
    expect(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 })).toStrictEqual([
      'Dutch',
      'Greek',
      'Hindi',
    ]);
    expect(myLanguages({ 'C++': 50, ASM: 10, Haskell: 20 })).toStrictEqual([]);
  });
});
