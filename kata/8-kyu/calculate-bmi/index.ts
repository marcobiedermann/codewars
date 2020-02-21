function bmi(weight: number, height: number): string {
  const bodyMassIndex = weight / height ** 2;

  if (bodyMassIndex <= 18.5) {
    return 'Underweight';
  }

  if (bodyMassIndex <= 25.0) {
    return 'Normal';
  }

  if (bodyMassIndex <= 30.0) {
    return 'Overweight';
  }

  return 'Obese';
}

export default bmi;
