import stringToArray from '.';

describe('stringToArray', () => {
  it('should covert string into words', () => {
    expect(stringToArray('Robin Singh')).toEqual(['Robin', 'Singh']);
    expect(stringToArray('I love arrays they are my favorite')).toEqual([
      'I',
      'love',
      'arrays',
      'they',
      'are',
      'my',
      'favorite',
    ]);
  });
});
