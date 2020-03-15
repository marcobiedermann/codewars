function checkExam(array1: string[], array2: string[]): number {
  return Math.max(
    array1.reduce((accumulator, currentValue, index) => {
      if (!array2[index]) {
        return accumulator;
      }

      const score = currentValue === array2[index] ? 4 : -1;

      return accumulator + score;
    }, 0),
    0,
  );
}

export default checkExam;
