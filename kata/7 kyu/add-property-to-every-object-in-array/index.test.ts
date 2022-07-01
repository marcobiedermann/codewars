import questions from '.';

describe('questions', () => {
  it('should add a new property to every object in the array', () => {
    expect(questions[0].usersAnswer).toBeNull();
  });
});
