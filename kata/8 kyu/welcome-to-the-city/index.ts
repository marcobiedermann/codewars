function sayHello(name: [string, string], city: string, state: string): string {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}

export default sayHello;
