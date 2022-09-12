function billboard(name: string, price = 30): number {
  return name.length / (1 / price);
}

export default billboard;
