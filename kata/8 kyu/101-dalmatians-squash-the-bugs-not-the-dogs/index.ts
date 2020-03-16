const dogs = [
  'Hardly any',
  'More than a handful!',
  "Woah that's a lot of dogs!",
  '101 DALMATIANS!!!',
];

function howManyDalmatians(number: number): string {
  if (number <= 10) {
    return dogs[0];
  }

  if (number <= 50) {
    return dogs[1];
  }

  if (number === 101) {
    return dogs[3];
  }

  return dogs[2];
}

export default howManyDalmatians;
