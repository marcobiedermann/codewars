function maxRot(n: number): number {
  let numberBiggest = n;
  const digits = n.toString().split('');

  digits.forEach((_digit, index) => {
    const [first] = digits.splice(index, 1);

    digits.push(first);

    const str = digits.join('');

    if (parseInt(str, 10) > numberBiggest) {
      numberBiggest = parseInt(str, 10);
    }
  });

  return numberBiggest;
}

export default maxRot;
