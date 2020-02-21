function feast(beast: string, dish: string): boolean {
  return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length - 1]);
}

export default feast;
