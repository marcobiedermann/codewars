import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import dative from './index.ts';

describe('dative', () => {
  it('should return the valid form of a valid Hungarian word', () => {
    assert.strictEqual(dative('ablak'), 'ablaknak');
    assert.strictEqual(dative('tükör'), 'tükörnek');
    assert.strictEqual(dative('keret'), 'keretnek');
    assert.strictEqual(dative('otthon'), 'otthonnak');
    assert.strictEqual(dative('virág'), 'virágnak');
    assert.strictEqual(dative('tett'), 'tettnek');
    assert.strictEqual(dative('rokkant'), 'rokkantnak');
    assert.strictEqual(dative('rossz'), 'rossznak');
    assert.strictEqual(dative('gonosz'), 'gonosznak');
  });
});
