function cookingTime(eggs: number): number {
  const maxEggs = 8;
  const boilTime = 5;

  return Math.ceil(eggs / maxEggs) * boilTime;
}

export default cookingTime;
