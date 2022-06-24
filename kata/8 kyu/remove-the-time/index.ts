function shortenToDate(longDate: string): string {
  const [date] = longDate.split(',');

  return date;
}

export default shortenToDate;
