function alphabetPosition(text: string): string {
  const match = text.toUpperCase().match(/[a-z]/gi) || [];

  return match.map((character) => character.charCodeAt(0) - 64).join(' ');
}

export default alphabetPosition;
