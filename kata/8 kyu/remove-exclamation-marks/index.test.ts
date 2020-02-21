import removeExclamationMarks from '.';

describe('removeExclamationMarks', () => {
  it('should remove exclamation marks from string', () => {
    expect.assertions(1);

    expect(removeExclamationMarks('Hello World!')).toStrictEqual('Hello World');
  });
});
