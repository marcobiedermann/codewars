import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solution from './index.ts';

describe('solution', () => {
  it('should break up camel casing using a space between', () => {
    assert.strictEqual(solution('camelCasing'), 'camel Casing');
    assert.strictEqual(solution('camelCasingTest'), 'camel Casing Test');
  });
});
