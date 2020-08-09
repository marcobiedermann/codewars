function oddOrEven(array: number[]): 'odd' | 'even' {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) % 2
    ? 'odd'
    : 'even';
}

export default oddOrEven;
