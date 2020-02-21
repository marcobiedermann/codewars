function number(busStops: number[][]): number {
  return busStops.reduce((accumulator, currentValue) => {
    const [on, off] = currentValue;

    return accumulator + (on - off);
  }, 0);
}

export default number;
