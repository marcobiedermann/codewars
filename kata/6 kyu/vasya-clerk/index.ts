type Bill = 100 | 50 | 25;

function tickets(peopleInLine: Bill[]): 'YES' | 'NO' {
  let a25 = 0;
  let a50 = 0;
  for (let i = 0; i < peopleInLine.length; i += 1) {
    const current = peopleInLine[i];

    if (current === 25) {
      a25 += 1;
    }

    if (current === 50) {
      a25 -= 1;
      a50 += 1;
    }

    if (current === 100) {
      if (a50 === 0 && a25 >= 3) {
        a25 -= 3;
      } else {
        a25 -= 1;
        a50 -= 1;
      }
    }

    if (a25 < 0 || a50 < 0) {
      return 'NO';
    }
  }

  return 'YES';
}

export default tickets;
