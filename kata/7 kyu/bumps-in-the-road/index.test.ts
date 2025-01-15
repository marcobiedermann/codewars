import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import bump from './index.ts';

describe('bump', () => {
  it('should check if your can make it home safely', () => {
    assert.strictEqual(bump('n'), 'Woohoo!');
    assert.strictEqual(bump('_nnnnnnn_n__n______nn__nn_nnn'), 'Car Dead');
    assert.strictEqual(bump('______n___n_'), 'Woohoo!');
  });
});
