import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import wordPattern from './index.ts';

describe('wordPattern', () => {
  it('should return the word pattern for a given word', () => {
    assert.strictEqual(wordPattern('hello'), '0.1.2.2.3');
    assert.strictEqual(wordPattern('heLlo'), '0.1.2.2.3');
    assert.strictEqual(wordPattern('helLo'), '0.1.2.2.3');
    assert.strictEqual(
      wordPattern('Hippopotomonstrosesquippedaliophobia'),
      '0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13',
    );
  });
});
