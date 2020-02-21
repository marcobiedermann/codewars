import bmi from '.';

describe('bmi', () => {
  it('should calculate BMI', () => {
    expect.assertions(1);

    expect(bmi(80, 1.8)).toStrictEqual('Normal');
  });
});
