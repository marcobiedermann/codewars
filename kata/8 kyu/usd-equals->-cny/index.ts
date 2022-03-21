function usdcny(usd: number): string {
  const cny = usd * 6.75;

  return `${cny.toFixed(2)} Chinese Yuan`;
}

export default usdcny;
