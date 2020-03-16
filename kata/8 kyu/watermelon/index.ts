function divide(weight: number): boolean {
  return weight > 2 && (weight - 2) % 2 === 0;
}

export default divide;
