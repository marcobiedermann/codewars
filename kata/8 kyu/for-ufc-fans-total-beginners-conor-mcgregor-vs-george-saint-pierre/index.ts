function quote(fighter: string): string | undefined {
  const normalized = fighter.toLocaleLowerCase();

  if (normalized.toLowerCase() === 'george saint pierre') {
    return 'I am not impressed by your performance.';
  }

  if (normalized.toLocaleLowerCase() === 'conor mcgregor') {
    return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
  }

  return undefined;
}

export default quote;
