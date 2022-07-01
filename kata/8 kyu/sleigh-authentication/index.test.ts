import { expect } from 'vitest';
import Sleigh from '.';

describe('sleigh', () => {
  const sleigh = new Sleigh();

  describe('authenticate', () => {
    it('must authenticate with correct credentials', () => {
      expect(sleigh.authenticate('Santa Claus', 'Ho Ho Ho!')).toBe(true);
    });

    it('must not authenticate with incorrect credentials', () => {
      expect(sleigh.authenticate('Santa', 'Ho Ho Ho!')).toBe(false);
      expect(sleigh.authenticate('Santa Claus', 'Ho Ho!')).toBe(false);
      expect(sleigh.authenticate('jhoffner', 'CodeWars')).toBe(false);
    });
  });
});
