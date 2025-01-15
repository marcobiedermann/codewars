import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import nameShuffler from './index.ts';

describe('nameShuffler', () => {
  it('should', () => {
    assert.strictEqual(nameShuffler('john McClane'), 'McClane john');
  });
});
