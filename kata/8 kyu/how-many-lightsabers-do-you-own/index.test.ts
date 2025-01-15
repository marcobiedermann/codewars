import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import howManyLightsabersDoYouOwn from './index.ts';

describe('howManyLightsabersDoYouOwn', () => {
  it('should return number of lightsabers', () => {
    assert.strictEqual(howManyLightsabersDoYouOwn(), 0);
    assert.strictEqual(howManyLightsabersDoYouOwn('Adam'), 0);
    assert.strictEqual(howManyLightsabersDoYouOwn('Zach'), 18);
  });
});
