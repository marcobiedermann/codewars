function isSantaClausable(obj: Record<string, unknown>): boolean {
  const properties = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];

  return properties.every((property) => typeof obj[property] === 'function');
}

export default isSantaClausable;
