function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
  const average =
    classPoints.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    classPoints.length;

  return yourPoints > average;
}

export default betterThanAverage;
