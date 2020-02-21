import bmi from '.';

describe('bmi', () => {
  it('should calculate BMI', () => {
    expect(bmi(80, 1.8)).toEqual('Normal');
  });
});
