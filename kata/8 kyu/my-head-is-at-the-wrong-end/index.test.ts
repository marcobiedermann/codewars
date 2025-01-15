import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import fixTheMeerkat from './index.ts';

describe('fixTheMeerkat', () => {
  it('should reverse elements in array', () => {
    assert.deepEqual(fixTheMeerkat(['tail', 'body', 'head']), ['head', 'body', 'tail']);
    assert.deepEqual(fixTheMeerkat(['tails', 'body', 'heads']), ['heads', 'body', 'tails']);
    assert.deepEqual(fixTheMeerkat(['bottom', 'middle', 'top']), ['top', 'middle', 'bottom']);
    assert.deepEqual(fixTheMeerkat(['lower legs', 'torso', 'upper legs']), [
      'upper legs',
      'torso',
      'lower legs',
    ]);
    assert.deepEqual(fixTheMeerkat(['ground', 'rainbow', 'sky']), ['sky', 'rainbow', 'ground']);
  });
});
