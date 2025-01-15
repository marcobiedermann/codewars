import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import countSmileys from './index.ts';

describe('countSmileys', () => {
  it('should count smiley faces in list', () => {
    assert.strictEqual(countSmileys([]), 0);
    assert.strictEqual(countSmileys([':D', ':~)', ';~D', ':)']), 4);
    assert.strictEqual(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
    assert.strictEqual(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
  });
});
