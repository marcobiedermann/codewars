import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import recycle from './index.ts';

describe('recycle', () => {
  it('should recycle all materials into their bins', () => {
    assert.deepEqual(
      recycle([
        { type: 'rotten apples', material: 'organic' },
        { type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic' },
        { type: 'wine bottle', material: 'glass', secondMaterial: 'paper' },
        { type: 'amazon box', material: 'paper' },
        { type: 'beer bottle', material: 'glass', secondMaterial: 'paper' },
      ]),
      [
        ['wine bottle', 'amazon box', 'beer bottle'],
        ['wine bottle', 'beer bottle'],
        ['rotten apples', 'out of date yogurt'],
        ['out of date yogurt'],
      ],
    );
  });
});
