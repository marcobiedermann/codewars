import { describe, expect, it } from 'vitest';
import partlist from '.';

describe('partlist', () => {
  it('should divide a list by all the ways', () => {
    expect.assertions(3);

    expect(partlist(['I', 'wish', 'I', "hadn't", 'come'])).toStrictEqual([
      ['I', "wish I hadn't come"],
      ['I wish', "I hadn't come"],
      ['I wish I', "hadn't come"],
      ["I wish I hadn't", 'come'],
    ]);
    expect(partlist(['cdIw', 'tzIy', 'xDu', 'rThG'])).toStrictEqual([
      ['cdIw', 'tzIy xDu rThG'],
      ['cdIw tzIy', 'xDu rThG'],
      ['cdIw tzIy xDu', 'rThG'],
    ]);
    expect(partlist(['vJQ', 'anj', 'mQDq', 'sOZ'])).toStrictEqual([
      ['vJQ', 'anj mQDq sOZ'],
      ['vJQ anj', 'mQDq sOZ'],
      ['vJQ anj mQDq', 'sOZ'],
    ]);
  });
});
