function queueTime(customers: number[], n: number): number {
  if (n < 1) {
    return 0;
  }

  if (n === 1) {
    return customers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  const head = customers.slice(0, n);
  const tail = customers.slice(n);

  const tills = tail.reduce((accumulator, currentValue) => {
    const minIndex = accumulator.indexOf(Math.min(...accumulator));

    accumulator[minIndex] += currentValue;

    return accumulator;
  }, head);

  return Math.max(...tills);
}

export default queueTime;
