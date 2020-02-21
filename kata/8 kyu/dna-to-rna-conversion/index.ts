function DNAtoRNA(dna: string): string {
  return dna.replace(/T/g, 'U');
}

export default DNAtoRNA;
