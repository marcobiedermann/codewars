import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Person from './index.ts';

describe('person', () => {
  describe('info', () => {
    it('should return info of person', () => {
      const john = new Person('john', 34);

      assert.strictEqual(john.info, 'johns age is 34');
    });
  });
});
