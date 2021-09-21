function keysAndValues(data: Record<string, unknown>): [string[], unknown[]] {
  const keys: string[] = [];
  const values: unknown[] = [];

  Object.entries(data).forEach(([key, value]) => {
    keys.push(key);
    values.push(value);
  });

  return [keys, values];
}

export default keysAndValues;
