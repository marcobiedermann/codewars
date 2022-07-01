import { expect } from 'vitest';
import pigIt from '.';

describe('pigIt', () => {
  it('should move first letter of each word to end and append `ay`', () => {
    expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay');
    expect(pigIt('This is my string')).toBe('hisTay siay ymay tringsay');
  });
});
