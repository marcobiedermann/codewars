function groupByCommas(n: number): string {
  return new Intl.NumberFormat().format(n);
}

export default groupByCommas;
