function cakes(recipe: Record<string, number>, available: Record<string, number>): number {
  return Object.keys(recipe).reduce(
    (accumulator, key) => Math.min(Math.floor(available[key] / recipe[key] || 0), accumulator),
    Infinity,
  );
}

export default cakes;
