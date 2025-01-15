import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import areYouPlayingBanjo from './index.ts';

describe('areYouPlayingBanjo', () => {
  it('should append if person is playing banjo to name', () => {
    assert.strictEqual(areYouPlayingBanjo('Martin'), 'Martin does not play banjo');
    assert.strictEqual(areYouPlayingBanjo('Rikke'), 'Rikke plays banjo');
  });
});
