import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import twoSort from './index.ts';

describe('twoSort', () => {
  it('should sort words and return first separated by `***`', () => {
    assert.strictEqual(
      twoSort(['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps']),
      'b***i***t***c***o***i***n',
    );
    assert.strictEqual(
      twoSort([
        'turns',
        'out',
        'random',
        'test',
        'cases',
        'are',
        'easier',
        'than',
        'writing',
        'out',
        'basic',
        'ones',
      ]),
      'a***r***e',
    );
  });
});
