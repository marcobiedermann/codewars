function openOrSenior(data: number[][]): string[] {
  return data.map(member => {
    const [age, handicap] = member;

    return age >= 55 && handicap > 7 ? 'Senior' : 'Open';
  });
}

export default openOrSenior;
