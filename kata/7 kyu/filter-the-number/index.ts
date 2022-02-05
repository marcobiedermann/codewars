function filterString(value: string): number {
  return parseInt(value.replace(/\D/g, ''), 10);
}

export default filterString;
