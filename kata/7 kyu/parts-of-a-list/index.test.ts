import assert from 'assert';
import { describe, it } from 'node:test';
import partlist from './index.ts';

describe('partlist', () => {
  it('should divide a list by all the ways', () => {
    assert.deepEqual(partlist(['I', 'wish', 'I', "hadn't", 'come']), [
      ['I', "wish I hadn't come"],
      ['I wish', "I hadn't come"],
      ['I wish I', "hadn't come"],
      ["I wish I hadn't", 'come'],
    ]);
    assert.deepEqual(partlist(['cdIw', 'tzIy', 'xDu', 'rThG']), [
      ['cdIw', 'tzIy xDu rThG'],
      ['cdIw tzIy', 'xDu rThG'],
      ['cdIw tzIy xDu', 'rThG'],
    ]);
    assert.deepEqual(partlist(['vJQ', 'anj', 'mQDq', 'sOZ']), [
      ['vJQ', 'anj mQDq sOZ'],
      ['vJQ anj', 'mQDq sOZ'],
      ['vJQ anj mQDq', 'sOZ'],
    ]);
  });
});
