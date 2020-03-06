function greet(name: string, owner: string): string {
  return `Hello ${name === owner ? 'boss' : 'guest'}`;
}

export default greet;
