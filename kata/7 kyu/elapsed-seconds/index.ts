function elapsedSeconds(startDate: Date, endDate: Date): number {
  return (endDate.valueOf() - startDate.valueOf()) / 1000;
}

export default elapsedSeconds;
