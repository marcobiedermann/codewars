function isEven(n: number): boolean {
  return n % 2 === 0;
}

function rowWeights(array: number[]): [number, number] {
  let team1 = 0;
  let team2 = 0;

  for (let i = 0; i < array.length; i += 1) {
    const current = array[i];

    if (isEven(i)) {
      team1 += current;
    } else {
      team2 += current;
    }
  }

  return [team1, team2];
}

export default rowWeights;
