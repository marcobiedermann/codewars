function sumDigits(number: string): number {
  return number
    .split('')
    .reduce((accumulator, currentValue) => accumulator + parseInt(currentValue, 10), 0);
}

function orderWeight(strng: string): string {
  return strng
    .split(' ')
    .sort((a, b) => {
      const sumA = sumDigits(a);
      const sumB = sumDigits(b);

      return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
    })
    .join(' ');
}

export default orderWeight;
