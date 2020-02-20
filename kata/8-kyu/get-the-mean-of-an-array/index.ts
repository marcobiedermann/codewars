function getAverage(marks: number[]): number {
  const average =
    marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / marks.length;

  return Math.floor(average);
}

export default getAverage;
