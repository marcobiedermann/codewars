import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import spEng from './index.ts';

describe('spEng', () => {
  it('should check is sentence contains `english`', () => {
    assert.strictEqual(spEng('english'), true);
    assert.strictEqual(spEng('egnlish'), false);
  });
});
