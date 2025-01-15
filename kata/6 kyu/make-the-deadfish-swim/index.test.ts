import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import parse from './index.ts';

describe('parse', () => {
  it('should parse and run Deadfish', () => {
    assert.deepEqual(parse('iiisdoso'), [8, 64]);
    assert.deepEqual(parse('iiisxxxdoso'), [8, 64]);
  });
});
