import bmi from '.';

describe('bmi', () => {
  it('should calculate BMI', () => {
    expect.assertions(4);

    expect(bmi(50, 1.8)).toStrictEqual('Underweight');
    expect(bmi(80, 1.8)).toStrictEqual('Normal');
    expect(bmi(90, 1.8)).toStrictEqual('Overweight');
    expect(bmi(100, 1.8)).toStrictEqual('Obese');
  });
});
