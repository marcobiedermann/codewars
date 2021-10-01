import bmi from '.';

describe('bmi', () => {
  it('should calculate BMI', () => {
    expect.assertions(4);

    expect(bmi(50, 1.8)).toBe('Underweight');
    expect(bmi(80, 1.8)).toBe('Normal');
    expect(bmi(90, 1.8)).toBe('Overweight');
    expect(bmi(100, 1.8)).toBe('Obese');
  });
});
