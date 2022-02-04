function calculateAge(yearOfBirth: number, yearToCountTo: number): string {
  if (yearOfBirth === yearToCountTo) {
    return 'You were born this very year!';
  }

  const age = Math.abs(yearToCountTo - yearOfBirth);
  const ageInWords = age === 1 ? 'year' : 'years';

  if (yearOfBirth > yearToCountTo) {
    return `You will be born in ${age} ${ageInWords}.`;
  }

  return `You are ${age} ${ageInWords} old.`;
}

export default calculateAge;
