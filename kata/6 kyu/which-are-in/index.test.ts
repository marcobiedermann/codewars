import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import inArray from './index.ts';

describe('inArray', () => {
  it('should return containing substrings in alphabetical order', () => {
    assert.deepEqual(
      inArray(['xyz', 'live', 'strong'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']),
      ['live', 'strong'],
    );
    assert.deepEqual(
      inArray(['live', 'strong', 'arp'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']),
      ['arp', 'live', 'strong'],
    );
    assert.deepEqual(
      inArray(['tarp', 'mice', 'bull'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']),
      [],
    );
  });
});
