function high(x: string): string {
  let highestWord = '';
  let highestScore = 0;

  x.split(' ').forEach((word) => {
    const score = word
      .split('')
      .reduce((accumulator, currentValue) => accumulator + currentValue.charCodeAt(0) - 96, 0);

    if (score > highestScore) {
      highestWord = word;
      highestScore = score;
    }
  });

  return highestWord;
}

export default high;
