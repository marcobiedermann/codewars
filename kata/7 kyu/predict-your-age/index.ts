function predictAge(...ages: number[]): number {
  return Math.floor(
    Math.sqrt(ages.reduce((accumulator, currentValue) => accumulator + currentValue ** 2, 0)) / 2,
  );
}

export default predictAge;
