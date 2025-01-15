import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import kebabize from './index.ts';

describe('kebabize', () => {
  it('should convert a camel case string into a kebab case', () => {
    assert.strictEqual(kebabize('myCamelCasedString'), 'my-camel-cased-string');
    assert.strictEqual(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');
  });
});
