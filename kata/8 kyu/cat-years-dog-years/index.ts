function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
  return [
    humanYears,
    (humanYears - 1 ? 16 : 11) + 4 * humanYears,
    (humanYears - 1 ? 14 : 10) + 5 * humanYears,
  ];
}

export default humanYearsCatYearsDogYears;
