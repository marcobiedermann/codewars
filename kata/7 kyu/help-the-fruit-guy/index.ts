function removeRotten(bagOfFruits: string[] | null): string[] {
  if (!bagOfFruits) {
    return [];
  }

  return bagOfFruits.map((fruit) => fruit.replace('rotten', '').toLowerCase());
}

export default removeRotten;
