import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import capitalizeWord from './index.ts';

describe('capitalizeWord', () => {
  it('should capitalize word', () => {
    assert.strictEqual(capitalizeWord('word'), 'Word');
    assert.strictEqual(capitalizeWord('i'), 'I');
    assert.strictEqual(capitalizeWord('glasswear'), 'Glasswear');
  });
});
