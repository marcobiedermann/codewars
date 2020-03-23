function stockList(listOfArt: string[], listOfCat: string[]): string {
  if (!listOfArt.length) {
    return '';
  }

  const stock = listOfArt.reduce((accumulator: { [key: string]: number }, currentValue) => {
    const [label, quantity] = currentValue.split(' ');
    const category = label[0];

    if (!accumulator[category]) {
      accumulator[category] = 0;
    }

    accumulator[category] += Number(quantity);

    return accumulator;
  }, {});

  return listOfCat
    .map((category) => {
      const quantity = stock[category] || 0;

      return `(${category} : ${quantity})`;
    })
    .join(' - ');
}

export default stockList;
