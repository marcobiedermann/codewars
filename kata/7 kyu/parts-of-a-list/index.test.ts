import partlist from '.';

describe('partlist', () => {
  it('should divide a list by all the ways', () => {
    expect(partlist(['I', 'wish', 'I', "hadn't", 'come'])).toEqual([
      ['I', "wish I hadn't come"],
      ['I wish', "I hadn't come"],
      ['I wish I', "hadn't come"],
      ["I wish I hadn't", 'come'],
    ]);
    expect(partlist(['cdIw', 'tzIy', 'xDu', 'rThG'])).toEqual([
      ['cdIw', 'tzIy xDu rThG'],
      ['cdIw tzIy', 'xDu rThG'],
      ['cdIw tzIy xDu', 'rThG'],
    ]);
    expect(partlist(['vJQ', 'anj', 'mQDq', 'sOZ'])).toEqual([
      ['vJQ', 'anj mQDq sOZ'],
      ['vJQ anj', 'mQDq sOZ'],
      ['vJQ anj mQDq', 'sOZ'],
    ]);
  });
});
