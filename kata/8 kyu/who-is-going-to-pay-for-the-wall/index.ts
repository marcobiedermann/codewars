function whoIsPaying(name: string): string[] {
  if (name.length <= 2) {
    return [name];
  }

  return [name, name.slice(0, 2)];
}

export default whoIsPaying;
