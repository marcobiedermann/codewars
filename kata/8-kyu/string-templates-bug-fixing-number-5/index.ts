function buildString(...template: string[]): string {
  return `I like ${template.join(', ')}!`;
}

export default buildString;
