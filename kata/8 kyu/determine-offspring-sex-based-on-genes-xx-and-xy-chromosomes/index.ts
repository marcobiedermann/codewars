function chromosomeCheck(sperm: string): string {
  const sex = sperm.includes('Y') ? 'son' : 'daughter';

  return `Congratulations! You're going to have a ${sex}.`;
}

export default chromosomeCheck;
