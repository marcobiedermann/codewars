import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import decodeMorse from './index.ts';

describe('decodeMorse', () => {
  it('should decode the morse code', () => {
    assert.strictEqual(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
  });
});
