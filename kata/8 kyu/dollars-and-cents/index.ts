function formatMoney(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export default formatMoney;
