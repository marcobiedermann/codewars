import removeExclamationMarks from '.';

describe('removeExclamationMarks', () => {
  it('should remove exclamation marks from string', () => {
    expect(removeExclamationMarks('Hello World!')).toEqual('Hello World');
  });
});
