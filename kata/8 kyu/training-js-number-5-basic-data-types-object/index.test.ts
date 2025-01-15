import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import animal from './index.ts';

describe('animal', () => {
  it('should return a string, describing the given object', () => {
    assert.strictEqual(
      animal({
        name: 'dog',
        legs: 4,
        color: 'white',
      }),
      'This white dog has 4 legs.',
    );
    assert.strictEqual(
      animal({
        name: 'cock',
        legs: 2,
        color: 'red',
      }),
      'This red cock has 2 legs.',
    );
    assert.strictEqual(
      animal({
        name: 'rabbit',
        legs: 4,
        color: 'gray',
      }),
      'This gray rabbit has 4 legs.',
    );
  });
});
