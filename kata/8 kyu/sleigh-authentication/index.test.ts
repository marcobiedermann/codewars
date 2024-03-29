import { describe, expect, it } from 'vitest';
import Sleigh from '.';

describe('sleigh', () => {
  const sleigh = new Sleigh();

  describe('authenticate', () => {
    it('must authenticate with correct credentials', () => {
      expect.assertions(1);

      expect(sleigh.authenticate('Santa Claus', 'Ho Ho Ho!')).toBe(true);
    });

    it('must not authenticate with incorrect credentials', () => {
      expect.assertions(3);

      expect(sleigh.authenticate('Santa', 'Ho Ho Ho!')).toBe(false);
      expect(sleigh.authenticate('Santa Claus', 'Ho Ho!')).toBe(false);
      expect(sleigh.authenticate('jhoffner', 'CodeWars')).toBe(false);
    });
  });
});
