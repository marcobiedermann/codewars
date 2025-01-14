import { describe, expect, it } from 'vitest';
import Person from './index.ts';

describe('person', () => {
  describe('info', () => {
    it('should return info of person', () => {
      expect.assertions(1);

      const john = new Person('john', 34);

      expect(john.info).toBe('johns age is 34');
    });
  });
});
