import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import toAlternatingCase from './index.ts';

describe('toAlternatingCase', () => {
  it('should work for fixed tests (provided in the description)', () => {
    assert.strictEqual(toAlternatingCase('hello world'), 'HELLO WORLD');
    assert.strictEqual(toAlternatingCase('HELLO WORLD'), 'hello world');
    assert.strictEqual(toAlternatingCase('hello WORLD'), 'HELLO world');
    assert.strictEqual(toAlternatingCase('HeLLo WoRLD'), 'hEllO wOrld');
    assert.strictEqual(toAlternatingCase('12345'), '12345');
    assert.strictEqual(toAlternatingCase('1a2b3c4d5e'), '1A2B3C4D5E');
    assert.strictEqual(
      toAlternatingCase('String.prototype.toAlternatingCase'),
      'sTRING.PROTOTYPE.TOaLTERNATINGcASE',
    );
    assert.strictEqual(toAlternatingCase(toAlternatingCase('Hello World')), 'Hello World');
  });
});
