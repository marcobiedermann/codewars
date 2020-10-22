function unluckyDays(year: number): number {
  let total = 0;

  for (let i = 0; i < 12; i += 1) {
    const date = new Date(year, i, 13);

    if (date.getDay() === 5) {
      total += 1;
    }
  }

  return total;
}

export default unluckyDays;
