import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sayHello from './index.ts';

describe('sayHello', () => {
  it('should welcome a person', () => {
    assert.strictEqual(
      sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'),
      'Hello, John Smith! Welcome to Phoenix, Arizona!',
    );
  });
});
