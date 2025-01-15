import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import camelCase from './index.ts';

describe('camelCase', () => {
  it('should camelcase each word in sentence', () => {
    assert.strictEqual(camelCase('test case'), 'TestCase');
    assert.strictEqual(camelCase('camel case method'), 'CamelCaseMethod');
    assert.strictEqual(camelCase('say hello '), 'SayHello');
    assert.strictEqual(camelCase(' camel case word'), 'CamelCaseWord');
    assert.strictEqual(camelCase(''), '');
  });
});
