function rainAmount(mm: number): string {
  if (mm < 40) {
    return `You need to give your plant ${40 - mm}mm of water`;
  }

  return 'Your plant has had more than enough water for today!';
}

export default rainAmount;
